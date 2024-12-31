import { supabase } from "@/utils/initSupabase";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    const { id } = await request.json();
    const { data, error } = await supabase.from("posts").delete().eq("id", id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });
}
