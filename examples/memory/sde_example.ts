import { ZepClient, zepFields } from "../../src";

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
        apiKey: "z_1dWlkIjoiZjVmNjdjMzUtYmU3MS00ZDcxLTg0MGItYjM5MzhkZDUzZmUzIn0.s3F0HIViEK24DW48Hivv5dcnlOVkXeV_bZTxGsbiOtxvNfT-E7QeuD5t18GPNv6Tkr-0xr24VJ6HlDJ9qxAX0w",
        environment: "https://api.development.getzep.com/api/v2",
    });

    const result = await client.memory.extract(
        "08d92d23-ab98-4cea-ba42-402cc2d62f47",
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

    console.log("result", result);
}

main();
