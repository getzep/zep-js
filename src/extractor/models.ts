import { z } from "zod";

enum ZepDataType {
    ZepText = "ZepText",
    ZepZipCode = "ZepZipCode",
    ZepDate = "ZepDate",
    ZepDateTime = "ZepDateTime",
    ZepEmail = "ZepEmail",
    ZepPhoneNumber = "ZepPhoneNumber",
    ZepFloat = "ZepFloat",
    ZepNumber = "ZepNumber",
    ZepRegex = "ZepRegex",
}

// Base description schema
const descriptionSchema = z.string().optional();

// Define a function to create base schemas for each type
function createBaseSchema(type: ZepDataType, additionalSchema?: z.ZodRawShape) {
    return z.object({
        type: z.literal(type),
        description: descriptionSchema,
        ...additionalSchema,
    });
}

// Specific type schemas
const ZepNumberSchema = createBaseSchema(ZepDataType.ZepNumber, {
    value: z.number().optional(),
    pattern: z.string().optional(),
});

// Example of defining a complex model using the type schemas
export const CustomerSchema = z.object({
    shoeSize: ZepNumberSchema.extend({
        description: z.literal("The Customer's shoe size"),
    }).optional(),
    budget: ZepNumberSchema.extend({
        description: z.literal("The Customer's budget for the shoe purchase"),
    }).optional(),
});

// Using the schema to validate data
const exampleCustomer = {
    shoeSize: { value: 42, type: ZepDataType.ZepNumber, description: "The Customer's shoe size" },
    budget: { value: 500, type: ZepDataType.ZepNumber, description: "The Customer's budget for the shoe purchase" },
};

const parsedCustomer = CustomerSchema.safeParse(exampleCustomer);
if (parsedCustomer.success) {
    console.log("Valid customer data:", parsedCustomer.data);
} else {
    console.error("Validation errors:", parsedCustomer.error.format());
}
