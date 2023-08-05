export interface IDocument {
   uuid?: string;
   createdAt?: Date;
   updatedAt?: Date;
   documentId?: string;
   content: string;
   metadata?: Record<string, any>;
   isEmbedded?: boolean;
   embedding?: number[];
   score?: number;
}

export class Document implements IDocument {
   constructor(
      public content: string,
      public uuid?: string,
      public createdAt?: Date,
      public updatedAt?: Date,
      public documentId?: string,
      public metadata?: Record<string, any>,
      public isEmbedded?: boolean,
      public embedding?: number[],
      public score?: number
   ) {
      // Constructor is used to automatically create and initialize class properties
      // and this comment is to make the linter happy
   }

   toDict(): IDocument {
      return { ...this };
   }
}

export interface IDocumentCollectionModel {
   uuid?: string;
   createdAt?: Date;
   updatedAt?: Date;
   name: string;
   description?: string;
   metadata?: Record<string, any>;
   embeddingDimensions?: number;
   isAutoEmbedded?: boolean;
   isIndexed?: boolean;
   documentCount?: number;
   documentEmbeddedCount?: number;
   isNormalized?: boolean;
}

export class DocumentCollectionModel implements IDocumentCollectionModel {
   constructor(
      public name: string,
      public uuid?: string,
      public createdAt?: Date,
      public updatedAt?: Date,
      public description?: string,
      public metadata?: Record<string, any>,
      public embeddingDimensions?: number,
      public isAutoEmbedded: boolean = true,
      public isIndexed?: boolean,
      public documentCount?: number,
      public documentEmbeddedCount?: number,
      public isNormalized?: boolean
   ) {
      // Constructor is used to automatically create and initialize class properties
      // and this comment is to make the linter happy
   }

   toDict(): IDocumentCollectionModel {
      return { ...this };
   }
}
