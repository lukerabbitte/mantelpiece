"use client";

import SocialIconTray from "@/components/SocialIconTray";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return null;
    }

    return (
        <div className="h-20 flex flex-row items-center justify-center">
            <footer className="bg-slate-400/20 rounded-xl h-1/2 w-fit flex flex-row items-center justify-center p-4">
                <SocialIconTray />
            </footer>
        </div>
    );
};

export default Footer;
