"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export const signup = async (formData) => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp(formData);

    if (error) {
        return {
            success: false,
            error: "Sign up failed. Please try again.",
        };
    } else if (data.user?.identities?.length === 0) {
        return {
            success: false,
            error: "User already exists. Please try again.",
        };
    }

    revalidatePath("/", "layout");
    return {
        success: true,
        message: "Successfully signed up!",
    };
};
