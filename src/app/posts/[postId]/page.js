import { supabase } from "@/utils/initSupabase";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    const { data: posts } = await supabase.from("posts").select("slug");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function getStaticProps({ params }) {
    const { data: post } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", params.slug)
        .single();
    return { props: { post } };
}

const PostPage = ({ post }) => {
    return (
        <div className="prose">
            <h1>{post.title}</h1>
            <p>By {post.publisher}</p>
            <p>{post.excerpt}</p>
            <p>Written on {new Date(post.written_at).toLocaleDateString()}</p>
            <img src={post.image_url} alt={post.title} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    );
};

export default PostPage;
