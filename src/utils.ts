import semver from "semver";
import { APIError, AuthenticationError, NotFoundError } from "./errors";

const API_BASEURL = "/api/v1";
const SERVER_ERROR_MESSAGE = `Failed to connect to Zep server. Please check that:
- the server is running 
- the API URL is correct
- No other process is using the same port`;

const MINIMUM_SERVER_VERSION = "0.9.0-beta.0";

const MIN_SERVER_WARNING_MESSAGE = `Zep server version less than ${MINIMUM_SERVER_VERSION} does not support the document vector store features of this client. Please update to ${MINIMUM_SERVER_VERSION} or newer.`;

function warnDeprecation(functionName: string): void {
   console.warn(
      `Warning: ${functionName} is deprecated and will be removed in the next major release.`
   );
}

/*
 * Use semver to compare the server version to the minimum version.
 * Returns true if the server version is greater than or equal to the minimum version.
 *
 * If the version string is null, returns false.
 */
function isVersionGreaterOrEqual(version: string | null): boolean {
   if (!version || !semver.valid(version)) {
      return false;
   }
   return semver.gte(version, MINIMUM_SERVER_VERSION);
}

/*
 * Handles a request promise, throwing an appropriate error if the request fails.
 */
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
                  response.status,
                  await response.text()
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

/*
 * Converts an object to a dictionary, removing any null or undefined values.
 */
export function toDictFilterEmpty(instance: any): any {
   const dict: { [key: string]: any } = {};
   Object.keys(instance).forEach((key) => {
      if (instance[key] !== null && instance[key] !== undefined) {
         dict[key] = instance[key];
      }
   });
   return dict;
}

export {
   warnDeprecation,
   handleRequest,
   SERVER_ERROR_MESSAGE,
   MIN_SERVER_WARNING_MESSAGE,
   API_BASEURL,
   isVersionGreaterOrEqual,
};
