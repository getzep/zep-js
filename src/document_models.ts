/* eslint-disable camelcase */
import { isFloat, toDictFilterEmpty } from "./utils";

export interface IDocument {
   uuid?: string;
   created_at?: Date;
   updated_at?: Date;
   document_id?: string;
   content: string;
   metadata?: Record<string, any>;
   is_embedded?: boolean;
   embedding?: Float32Array | number[];
   score?: number;
}

export class Document implements IDocument {
   uuid?: string;

   created_at?: Date;

   updated_at?: Date;

   document_id?: string;

   content: string;

   metadata?: Record<string, any>;

   is_embedded?: boolean;

   embedding?: Float32Array;

   score?: number;

   constructor({
      content,
      uuid,
      created_at,
      updated_at,
      document_id,
      metadata,
      is_embedded,
      embedding,
      score,
   }: {
      content: string;
      uuid?: string;
      created_at?: Date;
      updated_at?: Date;
      document_id?: string;
      metadata?: Record<string, any>;
      is_embedded?: boolean;
      embedding?: Float32Array;
      score?: number;
   }) {
      this.content = content;
      this.uuid = uuid;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.document_id = document_id;
      this.metadata = metadata;
      this.is_embedded = is_embedded;
      this.embedding = embedding;
      this.score = score;
   }

   toDict(): IDocument {
      return toDictFilterEmpty(this);
   }
}

export interface IDocumentCollectionModel {
   uuid?: string;
   created_at?: Date;
   updated_at?: Date;
   name: string;
   description?: string;
   metadata?: Record<string, any>;
   embedding_dimensions?: number;
   is_auto_embedded?: boolean;
   is_indexed?: boolean;
   document_count?: number;
   document_embedded_count?: number;
   is_normalized?: boolean;
}

export class DocumentCollectionModel implements IDocumentCollectionModel {
   uuid?: string;

   created_at?: Date;

   updated_at?: Date;

   name: string;

   description?: string;

   metadata?: Record<string, any>;

   embedding_dimensions?: number;

   is_auto_embedded?: boolean;

   is_indexed?: boolean;

   document_count?: number;

   document_embedded_count?: number;

   is_normalized?: boolean;

   constructor({
      name,
      uuid,
      created_at,
      updated_at,
      description,
      metadata,
      embedding_dimensions,
      is_auto_embedded = true,
      is_indexed,
      document_count,
      document_embedded_count,
      is_normalized,
   }: {
      name: string;
      uuid?: string;
      created_at?: Date;
      updated_at?: Date;
      description?: string;
      metadata?: Record<string, any>;
      embedding_dimensions?: number;
      is_auto_embedded?: boolean;
      is_indexed?: boolean;
      document_count?: number;
      document_embedded_count?: number;
      is_normalized?: boolean;
   }) {
      this.name = name;
      this.uuid = uuid;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.description = description;
      this.metadata = metadata;
      this.embedding_dimensions = embedding_dimensions;
      this.is_auto_embedded = is_auto_embedded;
      this.is_indexed = is_indexed;
      this.document_count = document_count;
      this.document_embedded_count = document_embedded_count;
      this.is_normalized = is_normalized;
   }

   toDict(): IDocumentCollectionModel {
      return toDictFilterEmpty(this);
   }
}

export function isGetIDocument(object: any): object is IDocument {
   return (
      "content" in object &&
      typeof object.content === "string" &&
      "uuid" in object &&
      typeof object.uuid === "string"
   );
}

function docsToDocsWithFloatArray(documents: IDocument[]): IDocument[] {
   return documents.map((d) => {
      if (
         d.embedding &&
         Array.isArray(d.embedding) &&
         isFloat(d.embedding[0])
      ) {
         const doc: IDocument = {
            ...d,
            embedding: new Float32Array(d.embedding),
         };
         return doc;
      }
      return d;
   });
}

function docsWithFloatArrayToDocs(documents: IDocument[]): IDocument[] {
   return documents.map((d) => {
      if (d.embedding && d.embedding instanceof Float32Array) {
         const doc: IDocument = {
            ...d,
            embedding: Array.from(d.embedding),
         };
         return doc;
      }
      return d;
   });
}

export { docsToDocsWithFloatArray, docsWithFloatArrayToDocs };
