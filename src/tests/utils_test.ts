import { APIError, AuthenticationError, NotFoundError } from "../errors";
import {
   handleRequest,
   isFloat,
   isVersionGreaterOrEqual,
   MINIMUM_SERVER_VERSION,
   toDictFilterEmpty,
   warnDeprecation,
} from "../utils";
import { FetchMock } from "jest-fetch-mock";

const fetchMock = global.fetch as FetchMock;

describe("Utility functions", () => {
   test("warnDeprecation", () => {
      console.warn = jest.fn();
      warnDeprecation("testFunction");
      expect(console.warn).toHaveBeenCalledWith(
         "Warning: testFunction is deprecated and will be removed in the next major release."
      );
   });

   describe("isVersionGreaterOrEqual", () => {
      test("returns false if version is null", () => {
         expect(isVersionGreaterOrEqual(null)).toBe(false);
      });

      test("returns true if version is greater than minimum", () => {
         expect(isVersionGreaterOrEqual("0.10.0")).toBe(true);
      });

      test("returns true if version is equal to minimum", () => {
         expect(isVersionGreaterOrEqual(MINIMUM_SERVER_VERSION)).toBe(true);
      });

      test("returns false if version is less than minimum", () => {
         expect(isVersionGreaterOrEqual("0.8.0")).toBe(false);
      });

      test("returns false if version is invalid semver", () => {
         expect(isVersionGreaterOrEqual("a")).toBe(false);
      });
   });

   describe("handleRequest", () => {
      beforeEach(() => {
         fetchMock.resetMocks();
      });

      test("throws NotFoundError for 404 status", async () => {
         fetchMock.mockResponseOnce("", { status: 404 });

         await expect(handleRequest(fetch("/not-found"))).rejects.toThrow(
            NotFoundError
         );
      });

      test("throws AuthenticationError for 401 status", async () => {
         fetchMock.mockResponseOnce("", { status: 401 });

         await expect(handleRequest(fetch("/unauthorized"))).rejects.toThrow(
            AuthenticationError
         );
      });

      test("throws APIError for other non-ok status", async () => {
         fetchMock.mockResponseOnce("Server error", { status: 500 });

         await expect(handleRequest(fetch("/error"))).rejects.toThrow(APIError);
      });
   });

   test("toDictFilterEmpty", () => {
      const obj = {
         key1: "value1",
         key2: null,
         key3: undefined,
         key4: "value4",
      };
      expect(toDictFilterEmpty(obj)).toEqual({
         key1: "value1",
         key4: "value4",
      });
   });

   describe("isFloat", () => {
      it("returns true for floating-point numbers and zero", () => {
         expect(isFloat(1.5)).toBe(true);
         expect(isFloat(-0.1)).toBe(true);
         expect(isFloat(0.0)).toBe(true);
      });

      it("returns false for integers", () => {
         expect(isFloat(1)).toBe(false);
         expect(isFloat(-1)).toBe(false);
      });

      it("returns false for non-numbers", () => {
         expect(isFloat("1.5")).toBe(false);
         expect(isFloat("test")).toBe(false);
         expect(isFloat(null)).toBe(false);
         expect(isFloat(undefined)).toBe(false);
      });
   });
});