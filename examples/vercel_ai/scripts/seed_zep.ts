import { ZepClient, Zep } from "@getzep/zep-cloud";
import { v4 as uuidv4 } from "uuid";
import { loadEnvConfig } from "@next/env";

// Load environment variables from .env.local
const projectDir = process.cwd();
loadEnvConfig(projectDir);

interface ChatMessage {
    name?: string;
    role: Zep.RoleType;
    content: string;
    timestamp: string;
}

export function convertToZepMessages(chatHistory: ChatMessage[]): Zep.Message[] {
    return chatHistory.map((message) => {
        return {
            content: message.content,
            role: message.name || message.role, // fallback to role if name isn't present
            roleType: message.role,
            createdAt: message.timestamp,
        };
    });
}

async function seedZepData() {
    const zepClient = new ZepClient({
        apiKey: process.env.ZEP_API_KEY,
    });
    const firstName = "Emily";
    const lastName = "Painter";
    const sessionId = uuidv4();
    const userId = `${firstName}${uuidv4()}`;
    const email = `${firstName}@painters.com`;
    const botName = "SupportBot";

    // We're going to upload an assortment of data to Zep. These include past dialog with the agent, CRM support cases, and billing data.
    const supportCases = [
        {
            subject: "Bug: Magic Pen Tool Drawing Goats Instead of Boats",
            messages: [
                {
                    role: "user",
                    content: "Whenever I use the magic pen tool to draw boats, it ends up drawing goats instead.",
                    timestamp: "2024-03-16T14:20:00Z",
                },
                {
                    role: "support_agent",
                    content: `Hi ${firstName}, that sounds like a bug! Thanks for reporting it. Could you let me know exactly how you're using the tool when this happens?`,
                    timestamp: "2024-03-16T14:22:00Z",
                },
                {
                    role: "user",
                    content:
                        "Sure, I select the magic pen, draw a boat shape, and it just replaces the shape with goats.",
                    timestamp: "2024-03-16T14:25:00Z",
                },
                {
                    role: "support_agent",
                    content:
                        "Got it! We'll escalate this to our engineering team. In the meantime, you can manually select the boat shape from the options rather than drawing it with the pen.",
                    timestamp: "2024-03-16T14:27:00Z",
                },
                {
                    role: "user",
                    content: "Okay, thanks. I hope it gets fixed soon!",
                    timestamp: "2024-03-16T14:30:00Z",
                },
            ],
            status: "escalated",
        },
    ];

    const chatHistory: ChatMessage[] = [
        {
            role: "assistant",
            name: botName,
            content: `Hello ${firstName}, welcome to PaintWiz support. How can I assist you today?`,
            timestamp: "2024-03-15T10:00:00Z",
        },
        {
            role: "user",
            name: firstName,
            content: "I'm absolutely furious! Your AI art generation is completely broken!",
            timestamp: "2024-03-15T10:02:00Z",
        },
        {
            role: "assistant",
            name: botName,
            content: `I'm sorry to hear that you're experiencing issues, ${firstName}. Can you please provide more details about what's going wrong?`,
            timestamp: "2024-03-15T10:03:00Z",
        },
        {
            role: "user",
            name: firstName,
            content:
                "Every time I try to draw mountains, your stupid app keeps turning them into fountains! And what's worse, all the people in my drawings have six fingers! It's ridiculous!",
            timestamp: "2024-03-15T10:05:00Z",
        },
        {
            role: "assistant",
            name: botName,
            content: `I sincerely apologize for the frustration this is causing you, ${firstName}. That certainly sounds like a significant glitch in our system. I understand how disruptive this can be to your artistic process. Can you tell me which specific tool or feature you're using when this occurs?`,
            timestamp: "2024-03-15T10:06:00Z",
        },
        {
            role: "user",
            name: firstName,
            content:
                "I'm using the landscape generator and the character creator. Both are completely messed up. How could you let this happen?",
            timestamp: "2024-03-15T10:08:00Z",
        },
    ];

    const transactions = [
        {
            date: "2024-07-30",
            amount: 99.99,
            status: "Success",
            account_id: userId,
            card_last_four: "1234",
        },
        {
            date: "2024-08-30",
            amount: 99.99,
            status: "Failed",
            account_id: userId,
            card_last_four: "1234",
            failure_reason: "Card expired",
        },
        {
            date: "2024-09-15",
            amount: 99.99,
            status: "Failed",
            account_id: userId,
            card_last_four: "1234",
            failure_reason: "Card expired",
        },
    ];

    const accountStatus = {
        user_id: userId,
        account: {
            account_id: userId,
            account_status: {
                status: "suspended",
                reason: "payment failure",
            },
        },
    };

    try {
        console.log("🤖 Seeding Zep with initial data...");

        // Users in Zep may have one or more chat sessions. These are threads of messages between the user and an agent.
        // TIP: Include the user's full name and email address when creating a user.
        // This improves Zep's ability to associate data, such as emails or documents, with a user.
        console.log(
            "Adding user:\n userID: ",
            userId,
            "\n email: ",
            email,
            "\n firstName: ",
            firstName,
            "\n lastName: ",
            lastName,
        );
        await zepClient.user.add({
            userId,
            email,
            firstName,
            lastName,
        });

        // Create a session for the user
        console.log("Adding session: ", sessionId);
        await zepClient.memory.addSession({
            sessionId,
            userId,
        });

        // Zep's high-level API allows us to add a list of messages to a session.
        console.log("Adding chat history...");
        await zepClient.memory.add(sessionId, {
            messages: convertToZepMessages(chatHistory),
        });

        // The lower-level data API allows us to add arbitrary data to a user's Knowledge Graph.
        console.log("Adding transactions...");
        await Promise.all(
            transactions.map((transaction) => {
                return zepClient.graph.add({
                    userId: userId,
                    data: JSON.stringify(transaction),
                    type: "json",
                });
            }),
        );

        console.log("Adding account status info...");
        await zepClient.graph.add({
            userId: userId,
            data: JSON.stringify(accountStatus),
            type: "json",
        });

        console.log("Adding support cases...");
        await Promise.all(
            supportCases.map((supportCase) => {
                return zepClient.graph.add({
                    userId: userId,
                    data: JSON.stringify(supportCase),
                    type: "json",
                });
            }),
        );

        console.log(
            "✅ Seeding complete! Please wait a few minutes for all data to be ingested into the knowledge graph.",
        );
    } catch (error) {
        console.error("❌ Error seeding data:", error);
        process.exit(1);
    }
}

// Execute the seeding function
seedZepData();
