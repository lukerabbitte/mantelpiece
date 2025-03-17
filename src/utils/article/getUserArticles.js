import { createClient } from "@/utils/supabase/server";


// At the moment this function has tentative support for sorting and pagination, although these are not
// necessary in frontend yet

/**
 * Fetch all articles authored by a specific user
 * @param {string} userId - The unique user ID
 * @param {Object} options - Optional parameters (limit, offset, etc.)
 * @returns {Promise<{data: Array|null, error: Error|null, status: number, count: number}>}
 */
export const getUserArticles = async (userId, options = {}) => {
    try {
        if (!userId) {
            return {
                data: null,
                error: "Missing user identifier",
                status: 400,
                count: 0,
            };
        }

        const {
            limit = 50,
            offset = 0,
            orderBy = "created_at",
            ascending = false,
            // Remove status parameter or replace with a column that exists
        } = options;

        const supabase = await createClient();

        // Fix: Use user_id instead of id to filter by user
        let query = supabase.from("article").select("*", { count: "exact" }).eq("author", userId);

        // Add sorting and pagination
        query = query.order(orderBy, { ascending }).range(offset, offset + limit - 1);

        // Execute the query
        const { data, error, status: responseStatus, count } = await query;

        if (error) {
            console.error(`Error fetching articles for user ${userId}:`, error);
            return {
                data: null,
                error: error.message || "Failed to fetch articles",
                status: responseStatus,
                count: 0,
            };
        }

        if (!data || data.length === 0) {
            return {
                data: [],
                error: null,
                status: 200,
                isEmpty: true,
                count: 0,
            };
        }

        return {
            data,
            error: null,
            status: responseStatus,
            isEmpty: false,
            count: count || data.length,
        };
    } catch (err) {
        console.error(`Unexpected error fetching articles for user ${userId}:`, err);
        return {
            data: null,
            error: "An unexpected error occurred",
            status: 500,
            count: 0,
        };
    }
};
