/**
 * Custom error class for ZepClient errors.
 */
export class ZepClientError extends Error {
   response_data?: any;

   /**
    * Constructs a new ZepClientError instance.
    * @param {string} message - The error message.
    * @param {any} [response_data] - Optional response data associated with the error.
    */
   constructor(message: string, response_data?: any) {
      super(message);
      this.response_data = response_data;
   }
}

/**
 * Custom error class for unexpected API response errors in the ZepClient.
 */
export class UnexpectedResponseError extends ZepClientError {
   
   /**
    * Constructs a new UnexpectedResponseError instance.
    * @param {string} message - The error message.
    */
   constructor(message: string) {
      super(message);
   }
}


/**
 * Custom error class for not found errors in the ZepClient.
 */
export class NotFoundError extends ZepClientError {
   
   /**
    * Constructs a new NotFoundError instance.
    * @param {string} message - The error message.
    */
   constructor(message: string) {
      super(message);
   }
}
