import CtaButton from "@/components/CtaButton";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 gap-4 min-h-screen-minus-navbar-and-footer">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl font-bold flex flex-row items-center gap-2">
                    <span className="inline-flex">
                        <FaExclamationTriangle />
                    </span>
                    WHOOPS{" "}
                    <span className="inline-flex">
                        <FaExclamationTriangle />
                    </span>
                </h1>
                <p className="text-balance max-w-prose text-center text-muted-foreground line-clamp-3">
                    Could not find profile information for this user account.
                </p>
            </div>
            <CtaButton text="Go Home" href="/" />
        </div>
    );
};

export default NotFound;
