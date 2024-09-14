import { db } from "@/lib/db";



// Function to get a user by email
export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email: email }, // Specify 'email' field
        });
        return user;
    } catch (err) {
        console.error(err); // Optional: Log the error for debugging
        return null;
    }
}

// Function to get a user by ID
export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({
            where: { id: id }, // Specify 'id' field
        });
        return user;
    } catch (err) {
        console.error(err); // Optional: Log the error for debugging
        return null;
    }
}
