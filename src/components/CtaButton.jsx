import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaButton = ({ text, href }) => {
    return (
        <Link href={href || "/"}>
            <div className="p-[1.2em] bg-slate-500/20 backdrop-blur-sm rounded-full hover:scale-105 hover:opacity-90 transition-transform duration-400">
                <div className="font-highlight font-black bg-primary p-[1.2em] rounded-full text-foreground">
                    <p className="px-4 py-2 bg-primary-foreground rounded-full flex flex-row gap-2 items-center justify-center">
                        {text}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CtaButton;
