import { supabase } from "@/utils/initSupabase";
import { NextResponse } from "next/server";

export async function GET() {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("written_at", { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });
}
