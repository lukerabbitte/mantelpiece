import { createClient } from "@/utils/supabase/server";

/**
 * Fetch a user profile by their username (case-insensitive)
 * @param {string} username - The username to search for
 * @param {boolean} caseSensitive - Whether the search should be case-sensitive
 * @returns {Promise<{data: Object|null, error: Error|null, status: number}>}
 */
export const getProfileByUsername = async (username, caseSensitive = false) => {
    try {
        if (!username) {
            return {
                data: null,
                error: "Missing username",
                status: 400,
            };
        }

        const supabase = await createClient();
        let query = supabase.from("profile").select("*");

        // Use case-sensitive or case-insensitive comparison based on parameter
        if (caseSensitive) {
            query = query.eq("username", username);
        } else {
            query = query.ilike("username", username); // Case-insensitive match
        }

        const { data, error, status } = await query.single();

        if (error) {
            if (error.code === "PGRST116") {
                // This is the "no rows returned" error code from PostgREST
                return {
                    data: null,
                    error: "Profile not found",
                    status: 404,
                };
            }

            console.error(`Error fetching profile with username ${username}:`, error);
            return {
                data: null,
                error: error.message || "Failed to fetch profile",
                status,
            };
        }

        return { data, error: null, status };
    } catch (err) {
        console.error(`Unexpected error fetching profile with username ${username}:`, err);
        return {
            data: null,
            error: "An unexpected error occurred",
            status: 500,
        };
    }
};
