"use client";

import SocialIconTray from "@/components/SocialIconTray";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return null;
    }

    return (
        <div className="h-18 flex flex-row items-end p-4 justify-center">
            <footer className="bg-slate-400/20 rounded-xl w-fit flex flex-row items-center justify-center py-2 px-4">
                <SocialIconTray />
            </footer>
        </div>
    );
};

export default Footer;
