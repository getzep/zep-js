import { ZepClient, zepFields } from "../../src";

async function main() {
    const projectApiKey = process.env.ZEP_API_KEY;
    const sessionId = process.env.ZEP_SESSION_ID;
    if (!sessionId) {
        console.error("Please provide a session ID using the ZEP_SESSION_ID environment variable");
        return;
    }

    const client = new ZepClient({
        apiKey: projectApiKey,
    });

    const result = await client.memory.extract(
        sessionId,
        {
            shoeSize: zepFields.number("The Customer's shoe size"),
            budget: zepFields.number("The Customer's budget for shoe purchase"),
            favoriteBrand: zepFields.text("The Customer's favorite shoe brand. Just one brand, please!"),
            conversationDate: zepFields.date("The date of the conversation. Use current date if not present"),
            conversationDateTime: zepFields.dateTime("The date time of the conversation."),
            formattedPrice: zepFields.regex("The formatted price of the shoe", /\$\d+\.\d{2}/),
        },
        { lastN: 20, validate: false, currentDateTime: new Date().toISOString() }
    );

    console.log("Extracted Data: ", result);
}

main();
