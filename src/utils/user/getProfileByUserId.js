import { createClient } from "@/utils/supabase/server";

/**
 * Fetch a user profile by their user ID
 * @param {string} userId - The unique user ID
 * @returns {Promise<{data: Object|null, error: Error|null, status: number}>}
 */
export const getProfileByUserId = async (userId) => {
    try {
        if (!userId) {
            return {
                data: null,
                error: "Missing user identifier",
                status: 400,
            };
        }

        const supabase = await createClient();
        const { data, error, status } = await supabase
            .from("profile")
            .select("*")
            .eq("id", userId)
            .single();

        if (error) {
            if (error.code === "PGRST116") {
                // This is the "no rows returned" error code from PostgREST
                return {
                    data: null,
                    error: "Profile not found",
                    status: 404,
                };
            }

            console.error(`Error fetching profile for user ${userId}:`, error);
            return {
                data: null,
                error: error.message || "Failed to fetch profile",
                status,
            };
        }

        return { data, error: null, status };
    } catch (err) {
        console.error(`Unexpected error fetching profile for user ${userId}:`, err);
        return {
            data: null,
            error: "An unexpected error occurred",
            status: 500,
        };
    }
};
