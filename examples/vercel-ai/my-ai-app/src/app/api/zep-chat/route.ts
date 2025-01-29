import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";
import { ZepClient, Zep } from "@getzep/zep-cloud";

export async function POST(req: Request) {
    const { messages, sessionId, userId } = await req.json();
    const zep = new ZepClient({ apiKey: process.env.ZEP_API_KEY });

    const tools = {
        searchFacts: tool({
            description: `Search for specific facts from previous conversations with the user. 
        Use this when you need to recall specific details, preferences, or statements the user has made.
        For example: search for facts about the user's work history, family details, or stated preferences.
        Returns individual facts extracted from conversations.`,
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
            description: `Search for conversation summaries and topic overviews from previous chats.
        Use this when you need broader context about topics or themes discussed with the user.
        For example: search for all discussions about a particular project, health issue, or ongoing situation.
        Returns summarized overviews of conversation topics and entities.`,
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
                content: `You are a compassionate mental health bot and caregiver.
                         Use this context from previous conversations: ${context}
                         Keep responses empathetic and supportive.`,
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
