import { v4 as uuidv4 } from "uuid";
import { CreateUserRequest, Message, NotFoundError } from "../../src/api";
import { ZepClient } from "../../src";

// @ts-ignore
import { history } from "./chat_shoe_store_history";
import { zepNumberField } from "../../src/extractor/models";

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
        "b7d17bc342ff4d30afabd2c4f009e806",
        {
            shoeSize: zepNumberField("The Customer's shoe size"),
            budget: zepNumberField("The Customer's budget for shoe purchase"),
        },
        {}
    );

    console.log("result", result);
}

main();
