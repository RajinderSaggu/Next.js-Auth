"use server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { RegisterSchema } from "../schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "../data/user";


export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);
    if (!validateFields.success) {
        return { errors: "Invalid" };
    }
    const { email, password, name } = validateFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { errors: "Email already in use!" }
    }
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    })

    //TODO SEND VERIFICATION TOKE EMAIL
    return { success: "User Created" }

}