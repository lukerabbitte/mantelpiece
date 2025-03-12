import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request) {
    console.log("Received GET request at /auth/confirm");

    const { searchParams } = new URL(request.url);
    const token_hash = searchParams.get("token_hash");
    const type = searchParams.get("type");

    console.log("Extracted query parameters:", { token_hash, type });

    if (token_hash && type) {
        console.log("Valid token_hash and type found. Verifying OTP...");
        const supabase = await createClient();

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        });

        if (error) {
            console.error("OTP verification failed:", error);
            redirect("/user?error=OTP%20Verification%20Failed");
        } else {
            console.log("OTP verification successful. Redirecting to: ", "/");
            redirect("/?success=Successfully%20Confirmed%20Email");
        }
    } else {
        console.warn("Missing token_hash or type. Redirecting to error page.");
    }

    redirect("/user");
}
