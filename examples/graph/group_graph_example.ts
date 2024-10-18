import { v4 as uuidv4 } from 'uuid';
import { ZepClient } from '../../src';

const API_KEY = process.env.ZEP_API_KEY;

async function main() {
    const client = new ZepClient({
        apiKey: API_KEY,
    });

    const groupId = uuidv4();
    console.log(`Creating group ${groupId}...`);
    const group = await client.group.add({
        groupId: groupId,
        name: "My Group",
        description: "This is my group",
    });
    console.log(`Group ${groupId} created`, group);

    console.log(`Adding episode to group ${groupId}...`);
    await client.graph.add({
        groupId: groupId,
        type: "text",
        data: "This is a test episode",
    });

    console.log(`Adding more meaningful episode to group ${groupId}...`);
    await client.graph.add({
        groupId: groupId,
        type: "text",
        data: "Eric Clapton is a rock star",
    });

    console.log(`Adding a JSON episode to group ${groupId}...`);
    const jsonString = '{"name": "Eric Clapton", "age": 78, "genre": "Rock"}';
    await client.graph.add({
        groupId: groupId,
        type: "json",
        data: jsonString,
    });

    console.log("Waiting for the graph to be updated...");
    await new Promise(resolve => setTimeout(resolve, 10000));

    console.log(`Getting nodes from group ${groupId}...`);
    const nodes = await client.graph.node.getByGroupId(groupId);
    console.log(`Nodes from group ${groupId}`, nodes);

    console.log(`Getting edges from group ${groupId}...`);
    const edges = await client.graph.edge.getByGroupId(groupId);
    console.log(`Edges from group ${groupId}`, edges);

    console.log(`Searching group ${groupId}...`);
    const searchResults = await client.graph.search({
        groupId: groupId,
        query: "Eric Clapton",
    });
    console.log(`Search results from group ${groupId}`, searchResults);
}

main().catch(console.error);