import * as  z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address."
    }),
    password: z.string().min(1, {
        message: "Password must be at least 1 characters long."
    })
})
export const RegisterSchema = z.object({
    name: z.string().min(8, {
        message: "Please enter a valid Name."
    }),
    email: z.string().email({
        message: "Please enter a valid email address."
    }),
    password: z.string().min(1, {
        message: "Password must be at least 1 characters long."
    })
})