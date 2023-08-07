import { v4 as uuidv4 } from "uuid";
import { Document, ZepClient } from "../src";
import * as fs from "fs";
import { faker } from "@faker-js/faker";

function readChunkFromFile(file: string, chunkSize: number): string[] {
   const text = fs.readFileSync(file, "utf8");
   const chunks = naiveSplitText(text, chunkSize);
   console.log(
      `Splitting text into ${chunks.length} chunks of max size ${chunkSize} characters.`
   );
   return chunks;
}

function printResults(results: Document[]): void {
   for (const result of results) {
      console.log(`${result.content} ${result.metadata} -> ${result.score}\n`);
   }
}

function naiveSplitText(text: string, maxChunkSize: number): string[] {
   // Naive text splitter chunks document into chunks of maxChunkSize,
   // using paragraphs and sentences as guides.

   let chunks: string[] = [];

   // Remove extraneous whitespace
   text = text.split(/\s+/).join(" ");

   // Split into paragraphs
   let paragraphs = text.split("\n\n");

   // Clean up paragraphs
   paragraphs = paragraphs.map((p) => p.trim()).filter((p) => p.length > 0);

   for (let paragraph of paragraphs) {
      if (paragraph.length > 0 && paragraph.length <= maxChunkSize) {
         chunks.push(paragraph);
      } else {
         let sentences = paragraph.split(". ");
         let currentChunk = "";

         for (let sentence of sentences) {
            if (currentChunk.length + sentence.length > maxChunkSize) {
               chunks.push(currentChunk);
               currentChunk = sentence;
            } else {
               currentChunk += (currentChunk ? ". " : "") + sentence;
            }
         }

         if (currentChunk) {
            chunks.push(currentChunk);
         }
      }
   }

   return chunks;
}

async function main() {
   const file = "babbages_calculation_engine.txt";
   const zepApiUrl = "http://localhost:8000";
   const maxChunkSize = 500;
   const collectionName = `babbage${uuidv4()}`.replace("-", "");

   console.log(`Creating collection ${collectionName}`);

   const client = await ZepClient.init(zepApiUrl);
   const collection = await client.document.addCollection({
      name: collectionName,
      embeddingDimensions: 384, // this must match the embedding dimensions of your embedding model
      description: "Charles Babbage's Babbage's Calculating Engine", // optional
      metadata: { qux: faker.string.sample() }, // optional
      isAutoEmbedded: true, // optional (default: true) - whether Zep should  automatically embed documents
   });

   const chunks = readChunkFromFile(file, maxChunkSize);

   const documents = chunks.map(
      (chunk) =>
         new Document({
            content: chunk,
            document_id: faker.system.fileName(), // optional document ID used in your system
            metadata: { qux: faker.string.sample() }, // optional metadata
         })
   );

   console.log(
      `Adding ${documents.length} documents to collection ${collectionName}`
   );

   const uuids = await collection.addDocuments(documents);

   console.log(
      `Added ${uuids.length} documents to collection ${collectionName}`
   );

   const query = "the moon";

   // Search for documents using both text and metadata
   const metadataQuery = {
      where: { jsonpath: '$[*] ? (@.baz == "qux")' },
   };

   const newSearchResults = await collection.search({
      text: query,
      metadata: metadataQuery,
      limit: 5,
   });
   console.log(
      `Found ${newSearchResults.length} documents matching query '${query}' ${metadataQuery}`
   );
   printResults(newSearchResults);

   // Search by embedding
   const interestingDocument = newSearchResults[0];
   console.log(
      `Searching for documents similar to:\n${interestingDocument.content}\n`
   );
   const embeddingSearchResults = await collection.search({
      embedding: interestingDocument.embedding,
      limit: 5,
   });
   console.log(
      `Found ${embeddingSearchResults.length} documents matching embedding`
   );
   printResults(embeddingSearchResults);

   // Delete a document
   const documentToDelete = embeddingSearchResults[0].uuid;
   if (!documentToDelete) {
      throw new Error("No document to delete");
   }
   console.log(`Deleting document ${documentToDelete}`);
   await collection.deleteDocument(documentToDelete);

   // Get a list of documents in the collection by UUID
   const docsToGet = uuids.slice(40, 50);
   console.log(`Getting documents: ${docsToGet}`);
   const retrievedDocuments = await collection.getDocuments(docsToGet);
   console.log(`Got ${retrievedDocuments.length} documents`);
   printResults(retrievedDocuments);

   // Index the collection
   console.log(`Indexing collection ${collectionName}`);
   await collection.createIndex(true); // Note: Use force option with caution!

   // Search for documents after indexing
   const indexedSearchResults = await collection.search({
      text: query,
      limit: 5,
   });
   console.log(
      `Found ${indexedSearchResults.length} documents matching query '${query}'`
   );
   printResults(indexedSearchResults);

   // Delete the collection
   console.log(`Deleting collection ${collectionName}`);
   await client.document.deleteCollection(collectionName);
}

main();
