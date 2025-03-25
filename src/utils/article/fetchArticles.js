import { createClient } from "@/utils/supabase/client";

/**
 * Fetch all articles from the database
 * @returns {Promise<{data: Array|null, error: Error|null, status: number}>}
 */
export const fetchArticles = async () => {
    try {
        const supabase = await createClient();
        const { data, error, status } = await supabase.from("article").select();

        if (error) {
            console.error("Error fetching articles:", error);
            return {
                data: null,
                error: error.message || "Failed to fetch articles",
                status,
            };
        }

        if (!data || data.length === 0) {
            return {
                data: [],
                error: null,
                status: 200,
                isEmpty: true,
            };
        }

        return { data, error: null, status, isEmpty: false };
    } catch (err) {
        console.error("Unexpected error fetching articles:", err);
        return {
            data: null,
            error: "An unexpected error occurred",
            status: 500,
        };
    }
};
