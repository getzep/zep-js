import { ZepClient } from "../../src";
import { EntityData, entityFields, EntityType } from "../../src/wrapper/ontology";

const API_KEY = process.env.ZEP_API_KEY;

async function main() {
    const client = new ZepClient({
        apiKey: API_KEY,
    });

    const purchaseSchema: EntityType = {
        description: "A purchase",
        fields: {
            product: entityFields.text("The product purchased"),
            quantity: entityFields.integer("The quantity purchased"),
            price: entityFields.float("The price of the product"),
        },
    };

    type Purchase = EntityData<typeof purchaseSchema>;

    await client.graph.setEntityTypes({
        Purchase: purchaseSchema,
    });

    const { nodes } = await client.graph.search({
        userId: "<user_id>",
        scope: "nodes",
        query: "ticket purchases",
        searchFilters: {
            nodeLabels: ["Purchase"],
        },
    });

    const purchases: Purchase[] = nodes?.map((node) => node.attributes as Purchase) ?? [];

    console.log(purchases);
}

main().catch(console.error);
