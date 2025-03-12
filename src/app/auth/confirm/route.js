import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request) {
    console.log("Received GET request at /auth/confirm");

    const { searchParams } = new URL(request.url);
    const token_hash = searchParams.get("token_hash");
    const type = searchParams.get("type");
    const next = searchParams.get("next") ?? "/";

    console.log("Extracted query parameters:", { token_hash, type, next });

    if (token_hash && type) {
        console.log("Valid token_hash and type found. Verifying OTP...");
        const supabase = await createClient();

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        });

        if (error) {
            console.error("OTP verification failed:", error);
        } else {
            console.log("OTP verification successful. Redirecting to:", next);
            return NextResponse.redirect("/user");
        }
    } else {
        console.warn("Missing token_hash or type. Redirecting to error page.");
    }

    return NextResponse.redirect("/error");
}
