/**
 * Unified error class for all Zep errors.
 */
export class ZepError extends Error {
   code?: number;

   responseData?: any;

   /**
    * Constructs a new ZepError instance.
    * @param {string} message - The error message.
    * @param {number} [code] - Optional error code associated with the error.
    * @param {any} [responseData] - Optional response associated with the error.
    */
   constructor(message: string, code?: number, responseData?: any) {
      super(message);
      this.code = code;
      this.responseData = responseData;
   }
}

/**
 * Custom error class for unexpected API response errors.
 */
export class APIError extends ZepError {}

/**
 * Custom error class for not found errors.
 */
export class NotFoundError extends ZepError {}

/**
 * Custom error class for authentication errors.
 */
export class AuthenticationError extends ZepError {}
