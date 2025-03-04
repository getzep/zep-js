import { v4 as uuidv4 } from "uuid";
import { ZepClient } from "../../src";
import { EntityData, entityFields } from "../../src/wrapper/ontology";

const API_KEY = process.env.ZEP_API_KEY;

async function main() {
    const client = new ZepClient({
        apiKey: API_KEY,
    });

    const purchaseSchema = {
        item_name: entityFields.text("The name of the item purchased"),
        item_price: entityFields.float("The price of the item"),
        additional_notes: entityFields.text("Additional notes about the purchase"),
    };

    type Purchase = EntityData<typeof purchaseSchema>;

    await client.graph.setEntityTypes({
        Purchase: purchaseSchema,
    });

    const node_result = await client.graph.search({
        query: "What did I buy?",
        entityType: "Purchase",
        scope: "nodes",
    });
    const nodes: Purchase[] = node_result?.nodes;

    console.log(purchases);
}

main().catch(console.error);
