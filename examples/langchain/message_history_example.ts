import { ZepClient } from "../../src";
import { ZepChatMessageHistory } from "../../src/langchain";
import { ChatOpenAI } from "@langchain/openai";
import {
   ChatPromptTemplate,
   MessagesPlaceholder,
} from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
async function main() {
   const zepClient = await ZepClient.init(process.env.ZEP_API_KEY);

   const prompt = ChatPromptTemplate.fromMessages([
      ["system", "Answer the user's question below. Be polite and helpful:"],
      new MessagesPlaceholder("history"),
      ["human", "{question}"],
   ]);

   const chain = prompt.pipe(
      new ChatOpenAI({
         temperature: 0.8,
         modelName: "gpt-3.5-turbo-1106",
      }),
   );

   const chainWithHistory = new RunnableWithMessageHistory({
      runnable: chain,
      getMessageHistory: (sessionId) =>
         new ZepChatMessageHistory({
            client: zepClient,
            sessionId: sessionId,
            memoryType: "perpetual",
         }),
      inputMessagesKey: "question",
      historyMessagesKey: "history",
   });

   const result = await chainWithHistory.invoke(
      {
         question: "What did we talk about earlier?",
      },
      {
         configurable: {
            sessionId: "06d114e2-7c6e-4268-91b9-63a4b9645bbf",
         },
      },
   );

   console.log("result", result);
}

main();
