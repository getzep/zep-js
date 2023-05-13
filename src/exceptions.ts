/* eslint-disable max-classes-per-file */

/**
 * Custom error class for ZepClient errors.
 */
export class ZepClientError extends Error {
   responseData?: any;

   /**
    * Constructs a new ZepClientError instance.
    * @param {string} message - The error message.
    * @param {any} [responseData] - Optional response associated with the error.
    */
   constructor(message: string, responseData?: any) {
      super(message);
      this.responseData = responseData;
   }
}

/**
 * Custom error class for unexpected API response errors in the ZepClient.
 */
export class UnexpectedResponseError extends ZepClientError {}

/**
 * Custom error class for not found errors in the ZepClient.
 */
export class NotFoundError extends ZepClientError {}
