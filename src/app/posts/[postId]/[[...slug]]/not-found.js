import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 gap-4 min-h-screenMinusNavbarAndFooter">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl font-bold flex flex-row items-center gap-2">
                    Post Not Found{" "}
                    <span className="inline-flex">
                        <FaExclamationTriangle />
                    </span>
                </h1>
                <p className="text-balance text-center text-muted-foreground line-clamp-3">
                    Could not find the post you were looking for.
                </p>
            </div>
            <CtaButton text="View All Posts" href="/posts" />
        </div>
    );
};

export default NotFound;
