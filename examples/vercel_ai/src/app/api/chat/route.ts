import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";
import { ZepClient, Zep } from "@getzep/zep-cloud";

export async function POST(req: Request) {
    const { messages, sessionId, userId } = await req.json();
    const zep = new ZepClient({ apiKey: process.env.ZEP_API_KEY });

    const tools = {
        searchFacts: tool({
            description: `Search for specific facts about the customer's account, support history, and past interactions.
        Use this when you need to recall specific details about billing, reported issues, or customer preferences.
        For example: search for payment history, reported bugs, or previous support interactions.
        Returns individual facts extracted from support conversations and account data.`,
            parameters: z.object({
                query: z.string().describe("The search query"),
                limit: z.number().optional().default(5).describe("Maximum number of results to return"),
            }),
            execute: async ({ query, limit }) => {
                const { edges } = await zep.graph.search({
                    userId: userId,
                    query: query,
                    limit,
                    scope: "edges",
                });
                return (edges ?? []).map((edge) => edge.fact);
            },
        }),

        searchNodes: tool({
            description: `Search for support case summaries and conversation overviews from previous interactions.
        Use this when you need broader context about ongoing issues or past support cases.
        For example: search for all discussions about a specific bug report, feature issue, or account status.
        Returns summarized overviews of support cases and conversation topics.`,
            parameters: z.object({
                query: z.string().describe("The search query"),
                limit: z.number().optional().default(5).describe("Maximum number of results to return"),
            }),
            execute: async ({ query, limit }) => {
                const { nodes } = await zep.graph.search({
                    userId: userId,
                    query: query,
                    limit,
                    scope: "nodes",
                });
                return (nodes ?? []).map((node) => node.summary);
            },
        }),
    };

    // Check if the session exists, if not, create it
    try {
        await zep.memory.getSession(sessionId);
    } catch (error) {
        if (error instanceof Zep.NotFoundError) {
            await zep.memory.addSession({
                sessionId,
                userId,
            });
        }
    }

    const lastMessage = messages[messages.length - 1];
    const { context } = await zep.memory.add(sessionId, {
        messages: [
            {
                role: lastMessage.role,
                roleType: lastMessage.role,
                content: lastMessage.content,
            },
        ],
        returnContext: true,
    });

    const result = await streamText({
        model: openai("gpt-4"),
        messages: [
            {
                role: "system",
                content: `You are a helpful and empathetic customer support agent for PaintWiz, an AI-powered digital art application.
                     Use this context from previous conversations: ${context}
                     Your goals are to:
                     - Help resolve technical issues and bugs with the application
                     - Address account and billing related concerns
                     - Provide clear explanations and workarounds when possible
                     - Maintain a professional and supportive tone
                     Keep responses focused on resolving the customer's immediate concerns.`,
            },
            ...messages,
        ],
        tools,
        maxSteps: 3,
        onFinish: async (result) => {
            await zep.memory.add(sessionId, {
                messages: [
                    {
                        role: "assistant",
                        roleType: "assistant",
                        content: result.text,
                    },
                ],
            });
        },
    });

    return result.toDataStreamResponse();
}
