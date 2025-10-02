import * as z from "zod";

const loginSchema = z.object({
    username: z.string()
        .min(1, "Username is required")
        .min(3, "Username must be at least 3 characters long"),
    password: z.string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters long")
});

export default loginSchema;
export type LoginSchema = z.infer<typeof loginSchema>;