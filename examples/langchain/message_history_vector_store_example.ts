import { ZepClient } from "../../src";
import { ChatOpenAI } from "@langchain/openai";
import {
   BasePromptTemplate,
   ChatPromptTemplate,
   MessagesPlaceholder,
   PromptTemplate,
} from "@langchain/core/prompts";
import { ZepChatMessageHistory, ZepVectorStore } from "../../src/langchain";
import { Document } from "@langchain/core/documents";
import {
   RunnableLambda,
   RunnableMap,
   RunnablePassthrough,
   RunnableWithMessageHistory,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ConsoleCallbackHandler } from "@langchain/core/tracers/console";
import { formatDocument } from "langchain/schema/prompt_template";

const DEFAULT_DOCUMENT_PROMPT = PromptTemplate.fromTemplate("{pageContent}");
interface ChainInput {
   question: string;
   sessionId: string;
}
async function combineDocuments(
   docs: Document[],
   documentPrompt: BasePromptTemplate = DEFAULT_DOCUMENT_PROMPT,
   documentSeparator: string = "\n\n",
) {
   const docStrings: string[] = await Promise.all(
      docs.map((doc) => {
         // @ts-ignore
         return formatDocument(doc, documentPrompt);
      }),
   );
   return docStrings.join(documentSeparator);
}
async function main() {
   const zepClient = await ZepClient.init(
      process.env.ZEP_API_KEY,
      process.env.ZEP_API_URL,
   );
   const vectorStore = await ZepVectorStore.init({
      client: zepClient,
      collectionName: "leobernstein",
   });

   const prompt = ChatPromptTemplate.fromMessages([
      [
         "system",
         `Answer the question based only on the following context: {context}`,
      ],
      new MessagesPlaceholder("history"),
      ["human", "{question}"],
   ]);

   const model = new ChatOpenAI({
      temperature: 0.8,
      modelName: "gpt-3.5-turbo-1106",
   });
   const retriever = vectorStore.asRetriever();
   const searchQuery = new RunnableLambda({
      func: (input: any) => {
         return zepClient.memory.synthesizeQuestion(input.session_id);
      },
   });
   const retrieverLambda = new RunnableLambda({
      func: async (question: string) => {
         const response = await retriever.invoke(question);
         return combineDocuments(response);
      },
   });
   const setupAndRetrieval = RunnableMap.from({
      context: searchQuery.pipe(retrieverLambda),
      question: (x: any) => x.question,
      history: (x: any) => x.history,
   });
   const outputParser = new StringOutputParser();

   const ragChain = setupAndRetrieval
      .pipe(prompt)
      // @ts-ignore
      .pipe(model)
      .pipe(outputParser);

   const invokeChain = (chainInput: ChainInput) => {
      const chainWithHistory = new RunnableWithMessageHistory({
         runnable: RunnablePassthrough.assign({
            session_id: () => chainInput.sessionId,
         }).pipe(ragChain),
         getMessageHistory: (sessionId) =>
            new ZepChatMessageHistory({
               client: zepClient,
               sessionId: sessionId,
               memoryType: "perpetual",
            }),
         inputMessagesKey: "question",
         historyMessagesKey: "history",
      });

      return chainWithHistory.invoke(
         { question: chainInput.question },
         {
            configurable: {
               sessionId: chainInput.sessionId,
            },
         },
      );
   };

   const chain = new RunnableLambda({
      func: invokeChain,
   }).withConfig({
      callbacks: [new ConsoleCallbackHandler()],
   });

   const result = await chain.invoke({
      question: "yes",
      sessionId: "06d114e2-7c6e-4268-91b9-63a4b9645bbf",
   });

   console.log("result", result);
}

main();
