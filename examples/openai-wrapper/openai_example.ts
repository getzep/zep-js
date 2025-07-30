import { OpenAI } from "openai";
import { ZepClient, createZepOpenAI } from "../../src";

async function main() {
    // Initialize OpenAI client
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    // Initialize Zep client
    const zep = new ZepClient({
        apiKey: process.env.ZEP_API_KEY,
    });

    // Create ZepOpenAI client that wraps OpenAI with Zep memory
    const zepOpenAI = createZepOpenAI(openai, zep);

    // Create a thread for memory
    const threadId = "example-thread-123";
    const userId = "example-user-456";

    // Create thread in Zep (required - wrapper will throw error if thread doesn't exist)
    try {
        await zep.thread.create({
            threadId: threadId,
            userId: userId
        });
        console.log("Thread created successfully");
    } catch (error) {
        console.log("Thread might already exist:", error);
    }

    // Use ZepOpenAI just like regular OpenAI, but with memory integration
    console.log("Making chat completion with Zep memory integration...");
    
    const response = await zepOpenAI.chat.completions.create({
        model: "gpt-3.5-turbo",
        thread_id: threadId, // This enables Zep memory integration
        user_id: userId,
        messages: [
            {
                role: "user",
                content: "Hello! My name is Alice and I love cats."
            }
        ],
    });

    console.log("Assistant response:", response.choices[0].message.content);

    // Example with custom context placement using placeholder
    console.log("\nMaking request with custom context placement...");
    
    const response2 = await zepOpenAI.chat.completions.create({
        model: "gpt-3.5-turbo",
        thread_id: threadId,
        user_id: userId,
        context_placeholder: "{context}", // Custom placeholder (this is the default)
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant. Here's what you know about the user: {context}"
            },
            {
                role: "user",
                content: "What do you remember about me?"
            }
        ],
    });

    console.log("Assistant response:", response2.choices[0].message.content);

    // Example without placeholder - context will be added automatically to system message
    console.log("\nMaking request without placeholder (automatic context injection)...");
    
    const response3 = await zepOpenAI.chat.completions.create({
        model: "gpt-3.5-turbo",
        thread_id: threadId,
        user_id: userId,
        messages: [
            {
                role: "user",
                content: "Tell me about my preferences again"
            }
        ],
    });

    console.log("Assistant response:", response3.choices[0].message.content);

    // Example with streaming
    console.log("\nTesting streaming response...");
    
    const stream = await zepOpenAI.chat.completions.create({
        model: "gpt-3.5-turbo",
        thread_id: threadId,
        user_id: userId,
        messages: [
            {
                role: "user",
                content: "Tell me a short story about cats."
            }
        ],
        stream: true,
    });

    console.log("Streaming response:");
    for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
            process.stdout.write(content);
        }
    }
    console.log("\n\nDone!");
}

if (require.main === module) {
    main().catch(console.error);
}