import { ZepClient, zepFields } from "../src";
import fetchMock from 'jest-fetch-mock';
import { zepFloatField, zepNumberField, ZepNumberSchema } from "../src/extractor/number";
import { ZepDataType } from "../src/extractor/base";
import { zepRegexField, ZepRegexSchema } from "../src/extractor/regex";
import { zepDateField, ZepDateSchema, zepDateTimeField } from "../src/extractor/date";
import {
    zepEmailField,
    zepPhoneNumberField,
    zepTextField,
    ZepTextSchema,
    zepZipcodeField,
} from "../src/extractor/text";

fetchMock.enableMocks();

describe("Memory.extract", () => {
    const testBaseUrl = "http://api.test.com/api/v2";
    const sessionId = "test-session-id";
    const apiKey = "Z_token123";

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it("should correctly parse request and response schema", async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
            shoeSize: "42",
            budget: "100",
        }));

        const client = new ZepClient({
            apiKey: apiKey,
            environment: testBaseUrl,
        });
        const schema = {
            shoeSize: zepFields.number("The Customer's shoe size"),
            budget: zepFields.number("The Customer's budget for shoe purchase"),
        };
        const params = { lastN: 20, validate: false };

        const result = await client.memory.extract(sessionId, schema, params);

        // Verify the request
        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith(
            `${testBaseUrl}/sessions/${encodeURIComponent(sessionId)}/extract`,
            expect.objectContaining({
                method: 'POST',
                headers: expect.objectContaining({
                    'Authorization': `Api-Key ${apiKey}`,
                }),
            })
        );

        expect(result).toEqual({
            shoeSize: 42,
            budget: 100,
        });
    });

    it("should handle an empty schema correctly", async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}));

        const client = new ZepClient({
            apiKey: apiKey,
            environment: testBaseUrl,
        });
        const schema = {};
        const params = { lastN: 20, validate: false };

        const result = await client.memory.extract(sessionId, schema, params);

        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(result).toEqual({});
    });
});

describe("zepFields", () => {
    describe("number field", () => {
        it("should create a number field schema with correct type and description", () => {
            const description = "Test Number Field";
            const result = zepNumberField(description);
            expect(result.zep_type).toEqual(ZepDataType.ZepNumber);
            expect(result.description).toEqual(description);
        });

        it("should correctly parse valid number inputs", () => {
            expect(() =>
                ZepNumberSchema.parse({
                    zep_type: ZepDataType.ZepNumber,
                    description: "Age",
                    value: "30",
                })
            ).not.toThrow();
            expect(
                ZepNumberSchema.parse({
                    zep_type: ZepDataType.ZepNumber,
                    description: "Age",
                    value: "30",
                }).value
            ).toEqual(30); // Assuming string '30' is converted to number 30
        });

        it("should reject invalid number inputs", () => {
            expect(() =>
                ZepNumberSchema.parse({
                    zep_type: ZepDataType.ZepNumber,
                    description: "Age",
                    value: "thirty",
                })
            ).toThrow();
        });
    });

    describe("float field", () => {
        it("should create a float field schema with correct type and description", () => {
            const description = "Test Float Field";
            const result = zepFloatField(description);
            expect(result.zep_type).toEqual(ZepDataType.ZepFloat);
            expect(result.description).toEqual(description);
        });

        it("should correctly parse valid float inputs", () => {
            expect(() =>
                ZepNumberSchema.parse({
                    zep_type: ZepDataType.ZepFloat,
                    description: "Weight",
                    value: "123.45",
                })
            ).not.toThrow();
            expect(
                ZepNumberSchema.parse({
                    zep_type: ZepDataType.ZepFloat,
                    description: "Weight",
                    value: "123.45",
                }).value
            ).toEqual(123.45);
        });

        it("should reject invalid float inputs", () => {
            expect(() =>
                ZepNumberSchema.parse({
                    zep_type: ZepDataType.ZepFloat,
                    description: "Weight",
                    value: "one hundred",
                })
            ).toThrow();
        });
    });

    describe("zepRegexField", () => {
        it("should create a regex field schema with the correct type and description", () => {
            const description = "Test Regex Field";
            const pattern = /abc/;
            const result = zepRegexField(description, pattern);

            expect(result.zep_type).toEqual(ZepDataType.ZepRegex);
            expect(result.description).toEqual(description);
            expect(result.pattern).toEqual(pattern.source);
        });

        it("should accept a valid regex pattern", () => {
            const description = "Valid Pattern";
            const pattern = /^[a-z]+$/;
            const validInput = {
                zep_type: ZepDataType.ZepRegex,
                description,
                pattern: pattern.source,
            };

            expect(() => ZepRegexSchema.parse(validInput)).not.toThrow();
        });

        it("should reject an invalid regex pattern", () => {
            const description = "Invalid Pattern";
            const invalidPattern = "[a-z"; // Unclosed bracket makes it invalid
            const invalidInput = {
                zep_type: ZepDataType.ZepRegex,
                description,
                pattern: invalidPattern,
            };

            expect(() => ZepRegexSchema.parse(invalidInput)).toThrow("Invalid regex pattern");
        });
    });

    describe("Date and DateTime Fields", () => {
        describe("zepDateField", () => {
            it("should create a date field schema with the correct type and description", () => {
                const description = "Test Date Field";
                const result = zepDateField(description);

                expect(result.zep_type).toEqual(ZepDataType.ZepDate);
                expect(result.description).toEqual(description);
            });

            it("should handle valid date strings and convert them into date objects", () => {
                const description = "Event Date";
                const validInput = {
                    zep_type: ZepDataType.ZepDate,
                    description,
                    value: "2022-01-01",
                };

                const parsed = ZepDateSchema.parse(validInput);
                expect(parsed.value).toBeInstanceOf(Date);
                expect(parsed.value!.toISOString()).toContain("2022-01-01");
            });

            it("should accept date objects directly", () => {
                const description = "Event Date";
                const date = new Date("2022-01-01");
                const validInput = {
                    zep_type: ZepDataType.ZepDate,
                    description,
                    value: date,
                };

                const parsed = ZepDateSchema.parse(validInput);
                expect(parsed.value).toBeInstanceOf(Date);
                expect(parsed.value).toEqual(date);
            });
        });

        describe("zepDateTimeField", () => {
            it("should create a datetime field schema with the correct type and description", () => {
                const description = "Test DateTime Field";
                const result = zepDateTimeField(description);

                expect(result.zep_type).toEqual(ZepDataType.ZepDateTime);
                expect(result.description).toEqual(description);
            });

            it("should correctly parse and validate datetime strings", () => {
                const description = "Event DateTime";
                const validInput = {
                    zep_type: ZepDataType.ZepDateTime,
                    description,
                    value: "2022-01-01T12:00:00.000Z",
                };

                const parsed = ZepDateSchema.parse(validInput);
                expect(parsed.value).toBeInstanceOf(Date);
                expect(parsed.value!.toISOString()).toContain("2022-01-01T12:00:00.000Z");
            });
        });
    });

    describe("Text Fields", () => {
        describe("General Text Field", () => {
            it("should create a text field with correct type and description", () => {
                const description = "General Information";
                const result = zepTextField(description);
                expect(result.zep_type).toEqual(ZepDataType.ZepText);
                expect(result.description).toEqual(description);
            });

            it("should accept any string value", () => {
                const result = ZepTextSchema.parse({
                    zep_type: ZepDataType.ZepText,
                    description: "General Info",
                    value: "Some random text",
                });
                expect(result.value).toEqual("Some random text");
            });
        });

        describe("Zip Code Field", () => {
            it("should create a zip code field with correct type and description", () => {
                const description = "User Zip Code";
                const result = zepZipcodeField(description);
                expect(result.zep_type).toEqual(ZepDataType.ZepZipCode);
                expect(result.description).toEqual(description);
            });
        });

        describe("Email Field", () => {
            it("should create an email field with correct type and description", () => {
                const description = "User Email";
                const result = zepEmailField(description);
                expect(result.zep_type).toEqual(ZepDataType.ZepEmail);
                expect(result.description).toEqual(description);
            });
        });

        describe("Phone Number Field", () => {
            it("should create a phone number field with correct type and description", () => {
                const description = "User Phone Number";
                const result = zepPhoneNumberField(description);
                expect(result.zep_type).toEqual(ZepDataType.ZepPhoneNumber);
                expect(result.description).toEqual(description);
            });
        });
    });
});
