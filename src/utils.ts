import { APIError, AuthenticationError, NotFoundError } from "./errors";

const API_BASEURL = "/api/v1";
const SERVER_ERROR_MESSAGE = `Failed to connect to Zep server. Please check that:
- the server is running 
- the API URL is correct
- No other process is using the same port`;

function warnDeprecation(functionName: string): void {
   console.warn(
      `Warning: ${functionName} is deprecated and will be removed in the next major release.`
   );
}

async function handleRequest(
   requestPromise: Promise<Response>,
   notFoundMessage: string | null = null
) {
   try {
      const response = await requestPromise;

      if (!response.ok) {
         switch (response.status) {
            case 404:
               throw new NotFoundError(
                  notFoundMessage || `Resource not found.`
               );
            case 401:
               throw new AuthenticationError("Authentication failed.");
            default:
               throw new APIError(
                  `Got an unexpected status code: ${response.status}`,
                  await response.json()
               );
         }
      }

      return response;
   } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
         throw new APIError(SERVER_ERROR_MESSAGE);
      }

      throw error;
   }
}

export function toDictFilterEmpty(instance: any): any {
   const dict: { [key: string]: any } = {};
   Object.keys(instance).forEach((key) => {
      if (instance[key] !== null && instance[key] !== undefined) {
         dict[key] = instance[key];
      }
   });
   return dict;
}

export { warnDeprecation, handleRequest, SERVER_ERROR_MESSAGE, API_BASEURL };
