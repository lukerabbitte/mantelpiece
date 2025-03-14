import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-start p-4">
            <h2>Post Not Found</h2>
            <p>Could not find the post you were looking for :\ </p>
            <p>
                View <Link href="/posts">all posts</Link>
            </p>
        </div>
    );
};

export default NotFound;
