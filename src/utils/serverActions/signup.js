"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export const signup = async (formData) => {
    const supabase = await createClient();

    const data = formData;

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        return {
            success: false,
            error: "Sign up failed. Please try again.",
        };
    }

    revalidatePath("/", "layout");
    return {
        success: true,
        message: "Successfully signed up!",
    };
};
