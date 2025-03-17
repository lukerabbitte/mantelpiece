import { createClient } from "@/utils/supabase/server";

/**
 * Fetch a single article by hash ID
 * @param {string} hashId - The unique hash ID of the article
 * @returns {Promise<{data: Object|null, error: Error|null, status: number}>}
 */
export const getArticleByHashId = async (hashId) => {
    console.log("did we even enter hash id function");
    try {
        if (!hashId) {
            return {
                data: null,
                error: "Missing article identifier",
                status: 400,
            };
        }

        const supabase = await createClient();
        const { data, error, status } = await supabase
            .from("article")
            .select("*")
            .eq("hash_id", hashId)
            .single();

        console.log("data", data);

        if (error) {
            if (error.code === "PGRST116") {
                // This is the "no rows returned" error code from PostgREST
                return {
                    data: null,
                    error: "Article not found",
                    status: 404,
                };
            }

            console.error(`Error fetching article with hash ${hashId}:`, error);
            return {
                data: null,
                error: error.message || "Failed to fetch article",
                status,
            };
        }

        return { data, error: null, status };
    } catch (err) {
        console.error(`Unexpected error fetching article with hash ${hashId}:`, err);
        return {
            data: null,
            error: "An unexpected error occurred",
            status: 500,
        };
    }
};
