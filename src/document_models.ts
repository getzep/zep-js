/* eslint-disable camelcase */
import { toDictFilterEmpty } from "./utils";

export interface IDocument {
   uuid?: string;
   created_at?: Date;
   updated_at?: Date;
   document_id?: string;
   content: string;
   metadata?: Record<string, any>;
   is_embedded?: boolean;
   embedding?: Float32Array;
   score?: number;

   toDict(): IDocument;
}

export class Document implements IDocument {
   constructor(
      public content: string,
      public uuid?: string,
      public created_at?: Date,
      public updated_at?: Date,
      public document_id?: string,
      public metadata?: Record<string, any>,
      public is_embedded?: boolean,
      public embedding?: Float32Array,
      public score?: number // eslint-disable-next-line no-empty-function
   ) {}

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
   constructor(
      public name: string,
      public uuid?: string,
      public created_at?: Date,
      public updated_at?: Date,
      public description?: string,
      public metadata?: Record<string, any>,
      public embedding_dimensions?: number,
      public is_auto_embedded: boolean = true,
      public is_indexed?: boolean,
      public document_count?: number,
      public document_embedded_count?: number,
      public is_normalized?: boolean // eslint-disable-next-line no-empty-function
   ) {}

   toDict(): IDocumentCollectionModel {
      return toDictFilterEmpty(this);
   }
}

export interface ISearchQuery {
   text: string;
   metadata: Record<string, any>;
}

export function isGetIDocument(object: any): object is IDocument {
   return (
      "content" in object &&
      typeof object.content === "string" &&
      "uuid" in object &&
      typeof object.uuid === "string"
   );
}
