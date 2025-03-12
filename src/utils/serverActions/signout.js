"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export const signout = async () => {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        return {
            success: false,
            error: "Sign out failed. Please try again.",
        };
    }

    revalidatePath("/", "layout");
    return {
        success: true,
        message: "Successfully signed out. See you soon.",
    };
};
