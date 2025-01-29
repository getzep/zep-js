"use client";

import { useChat } from "ai/react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Chat() {
    const [sessionId, setSessionId] = useState<string>("");

    useEffect(() => {
        setSessionId(uuidv4());
    }, []);

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        maxSteps: 5,
        api: "/api/zep-chat",
        body: {
            sessionId,
            userId: "vercel-ai-user",
        },
    });
    if (!sessionId) return null;
    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            {messages.map((m) => (
                <div key={m.id} className="whitespace-pre-wrap">
                    {m.role === "user" ? "User: " : "AI: "}
                    {m.toolInvocations ? <pre>{JSON.stringify(m.toolInvocations, null, 2)}</pre> : <p>{m.content}</p>}
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <input
                    className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}
