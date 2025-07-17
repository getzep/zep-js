import { v4 as uuidv4 } from "uuid";
import { CreateUserRequest, Message, NotFoundError } from "../../src/api";
import { ZepClient, zepFields } from "../../src";

// @ts-ignore
import { history } from "./chat_shoe_store_history";

function sleep(ms: number) {
    const date = Date.now();
    let currentDate = 0;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

async function main() {
    const projectApiKey = process.env.ZEP_API_KEY;

    const client = new ZepClient({
        apiKey: projectApiKey,
    });

    // Create a user
    const userId = uuidv4();
    const userRequest: CreateUserRequest = {
        userId: `amy${userId}`,
        metadata: { role: "admin" },
        email: "amy@acme.com",
        firstName: "Amy",
        lastName: "Wu",
    };
    const user = await client.user.add(userRequest);
    console.debug("Created user ", user);

    // Example thread ID
    const threadId = uuidv4();

    // Add thread associated with the above user
    try {
        await client.thread.create({
            threadId: threadId,
            userId: user.userId!,
        });
        console.debug("Adding new thread ", threadId);
    } catch (error) {
        console.debug("Got error:", error);
    }

    // Get thread
    try {
        const thread = await client.thread.get(threadId);
        console.debug("Retrieved thread ", thread);
    } catch (error) {
        console.debug("Got error:", error);
    }

    // Add messages.
    try {
        for (const { role, role_type, content } of history) {
            await client.thread.addMessages(threadId, {
                messages: [{ role, roleType: role_type, content }],
            });
        }
        console.debug("Added new messages to thread ", threadId);
    } catch (error) {
        console.debug("Got error:", error);
    }

    console.log("Sleeping for 5 seconds to let background tasks complete...");
    sleep(5000); // Sleep for 5 seconds
    console.log("Done sleeping!");

    // Get newly added memory
    try {
        console.debug("Getting memory for newly added memory with thread id ", threadId);
        const memory = await client.thread.getUserContext(threadId);
        console.log("Memory: ", JSON.stringify(memory));
        if (memory?.messages) {
            memory.messages.forEach((message) => {
                console.debug(JSON.stringify(message));
            });
        }

        if (memory.context) {
            console.debug("Memory Context: ", memory.context);
        }
    } catch (error) {
        if (error instanceof NotFoundError) {
            console.error("thread not found:", error.message);
        } else {
            console.error("Got error:", error);
        }
    }
}

main();
