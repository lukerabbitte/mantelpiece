import { supabase } from "@/utils/initSupabase";
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, created_at, written_at, excerpt, publisher, image_url, content, slug } = await request.json();
  const { data, error } = await supabase
    .from('posts')
    .insert([{ title, created_at, written_at, excerpt, publisher, image_url, content, slug }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 200 });
}