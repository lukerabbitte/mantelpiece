"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

/**
 * Delete an article by its hash ID
 * @param {string} hashId - The unique hash ID of the article
 * @returns {Promise<{data: boolean|null, error: string|null, status: number}>}
 */
export const deleteArticle = async (hashId) => {
    console.log("trying to delete article of hash id: ", hashId);

    try {
        if (!hashId) {
            return {
                data: null,
                error: "Missing article identifier",
                status: 400,
            };
        }

        const supabase = await createClient();
        const { error, status } = await supabase.from("article").delete().eq("hash_id", hashId);

        if (error) {
            console.error(`Error deleting article ${hashId}:`, error);
            return {
                data: null,
                error: error.message || "Failed to delete article",
                status,
            };
        }

        // Revalidate related paths to update UI
        revalidatePath("/user", "layout");
        revalidatePath("/articles", "page");

        return {
            data: true,
            error: null,
            status: 200,
        };
    } catch (err) {
        console.error(`Unexpected error deleting article ${hashId}:`, err);
        return {
            data: null,
            error: "An unexpected error occurred",
            status: 500,
        };
    }
};
