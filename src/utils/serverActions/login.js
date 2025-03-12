"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export const login = async (formData) => {
    const supabase = await createClient();
    const data = formData;

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        console.error("Auth error details:", error);

        switch (error.message) {
            case "Invalid login credentials":
                return {
                    success: false,
                    error: "Email or password is incorrect.",
                };
            case "Email not confirmed":
                return {
                    success: false,
                    error: "Please confirm your email before logging in.",
                };
            case "Password recovery requires a valid email":
                return {
                    success: false,
                    error: "Please enter a valid email address.",
                };
            case "Rate limit exceeded":
                return {
                    success: false,
                    error: "Too many login attempts. Please try again later.",
                };
            default:
                if (error.status === 400) {
                    return {
                        success: false,
                        error: "Invalid credentials. Please check your email and password.",
                    };
                } else if (error.status === 422) {
                    return {
                        success: false,
                        error: "Email format is invalid.",
                    };
                }

                return {
                    success: false,
                    error: `Authentication failed: ${error.message || "Please try again."}`,
                };
        }
    }

    revalidatePath("/", "layout");
    return {
        success: true,
        message: "Successfully logged in!",
    };
};
