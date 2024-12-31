import { supabase } from "@/utils/initSupabase";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const { id, title, created_at, written_at, excerpt, publisher, image_url, content, slug } =
        await request.json();
    const { data, error } = await supabase
        .from("posts")
        .update({ title, created_at, written_at, excerpt, publisher, image_url, content, slug })
        .eq("id", id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });
}
