import * as z from "zod";

const registerProductSchema = z.object({
    productName: z.string()
        .min(1, "Product name is required")
        .min(3, "Product name must be at least 3 characters long"),
    price: z.number("Price must be a number")
        .min(0.01, "Price must be at least 0.01"),
    description: z.string()
        .min(1, "Description is required")
        .min(10, "Description must be at least 10 characters long"),
    category: z.string()
        .min(1, "Category is required")
});

export default registerProductSchema;
export type RegisterProductSchema = z.infer<typeof registerProductSchema>;