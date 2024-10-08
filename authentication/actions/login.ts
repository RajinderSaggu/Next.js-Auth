"use server";
import { z } from "zod";
import { LoginSchema } from "../schemas";
import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";


export const Login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);
    if (!validateFields.success) {
        return { errors: "Invalid Fields" };
    }
    const { email, password } = validateFields.data

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" }
                default:
                    return { error: "Something went wrong" }
            }
        }
        throw error;
    }
}