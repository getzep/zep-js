import { Document, ZepClient } from "../../src";
import * as fs from "fs";
import { faker } from "@faker-js/faker";

async function checkEmbeddingStatus(
   client: ZepClient,
   collectionName: string
): Promise<void> {
   let c = await client.document.getCollection(collectionName);

   while (c.status !== "ready") {
      console.log(
         `Embedding status: ${c.document_embedded_count}/${c.document_count} documents embedded`
      );
      // Wait for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fetch the collection again to get the updated status
      c = await client.document.getCollection(collectionName);
   }
}

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
      console.log(
         `${result.content} - ${JSON.stringify(result.metadata)} -> ${
            result.score
         }\n`
      );
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
   const file = "./babbages_calculating_engine.txt";
   const zepApiUrl = "http://localhost:8000";
   const maxChunkSize = 500;
   const collectionName = `babbage${faker.string.alphanumeric({ length: 8 })}`;

   console.log(`Creating collection ${collectionName}`);

   const client = await ZepClient.init(zepApiUrl);
   const collection = await client.document.addCollection({
      name: collectionName,
      embeddingDimensions: 1536, // this must match the embedding dimensions of your embedding model
      description: "Babbage's Calculating Engine", // optional
      metadata: { qux: faker.string.sample() }, // optional
      isAutoEmbedded: true, // optional (default: true) - whether Zep should  automatically embed documents
   });

   console.log(`Created collection ${collectionName}`);

   const chunks = readChunkFromFile(file, maxChunkSize);

   const documents = chunks.map(
      (chunk) =>
         new Document({
            content: chunk,
            document_id: faker.system.fileName(), // optional document ID used in your system
            metadata: { foo: faker.string.sample(), bar: "qux" }, // optional metadata
         })
   );

   console.log(
      `Adding ${documents.length} documents to collection ${collectionName}`
   );

   const uuids = await collection.addDocuments(documents);

   console.log(
      `Added ${uuids.length} documents to collection ${collectionName}`
   );

   await checkEmbeddingStatus(client, collectionName);

   // Search for documents using text
   const query = "The celestial motions are nothing but a continual";
   const searchResults = await collection.search(
      {
         text: query,
      },
      3
   );
   console.log(
      `Found ${searchResults.length} documents matching query '${query}'`
   );
   printResults(searchResults);

   // Search for documents using both text and metadata
   const metadataQuery = {
      where: { jsonpath: '$[*] ? (@.bar == "qux")' },
   };

   const newSearchResults = await collection.search(
      {
         text: query,
         metadata: metadataQuery,
      },
      3
   );
   console.log(
      `Found ${newSearchResults.length} documents matching query '${query}' ${metadataQuery}`
   );
   printResults(newSearchResults);

   // Search by embedding
   const interestingDocument = newSearchResults[0];
   console.log(
      `Searching for documents similar to:\n${interestingDocument.content}\n`
   );
   const embeddingSearchResults = await collection.search(
      {
         embedding: interestingDocument.embedding,
      },
      3
   );
   console.log(
      `Found ${embeddingSearchResults.length} documents matching embedding`
   );
   printResults(embeddingSearchResults);

   // Search for non-existent documents will throw an error
   try {
      await collection.search(
         {
            metadata: {
               where: { jsonpath: '$[*] ? (@.this_key_does == "not exist")' },
            },
         },
         3
      );
   } catch (e) {
      console.log("Caught expected error: " + e);
   }

   // Delete a document
   const documentToDelete = embeddingSearchResults[0].uuid;
   if (!documentToDelete) {
      throw new Error("No document to delete");
   }
   console.log(`Deleting document ${documentToDelete}`);
   await collection.deleteDocument(documentToDelete);

   // Get a list of documents in the collection by UUID
   const docsToGet = uuids.slice(48, 50);
   console.log(`Getting documents: ${docsToGet}`);
   const retrievedDocuments = await collection.getDocuments(docsToGet);
   console.log(`Got ${retrievedDocuments.length} documents`);
   printResults(retrievedDocuments);

   // Index the collection
   console.log(`Indexing collection ${collectionName}`);
   await collection.createIndex(true); // Note: Use force option with caution!

   // Search for documents after indexing
   const indexedSearchResults = await collection.search(
      {
         text: query,
      },
      3
   );
   console.log(
      `Found ${indexedSearchResults.length} documents matching query '${query}'`
   );
   printResults(indexedSearchResults);

   // Delete the collection
   console.log(`Deleting collection ${collectionName}`);
   await client.document.deleteCollection(collectionName);
}

main();
