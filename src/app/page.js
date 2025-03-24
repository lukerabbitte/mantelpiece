"use client";

import "@/app/globals.css";
import FloatingText from "@/components/FloatingText";
import BioText from "@/components/BioText";
/* import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { toast } from "sonner"; */

const Home = () => {
    // We used to cleanup search params here, but removed for now to avoid need for client logic here

    /* const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        if (searchParams.has("from")) {
            const newSearchParams = new URLSearchParams(searchParams.toString());
            newSearchParams.delete("from");
            const remainingParams = newSearchParams.toString();
            const cleanUrl = remainingParams ? `${pathname}?${remainingParams}` : pathname;

            router.replace(cleanUrl, { scroll: false });
        }

        if (searchParams.has("success")) {
            const successMessage = decodeURIComponent(searchParams.get("success"));
            successMessage && toast.success(successMessage);

            const newSearchParams = new URLSearchParams(searchParams.toString());
            newSearchParams.delete("success");
            const remainingParams = newSearchParams.toString();
            const cleanUrl = remainingParams ? `${pathname}?${remainingParams}` : pathname;

            router.replace(cleanUrl, { scroll: false });
        }
    }, [searchParams, router, pathname]); */

    return (
        <div className="flex flex-col gap-4">
            <FloatingText text="Caroline Kelly">
                <BioText />
            </FloatingText>
        </div>
    );
};

export default Home;
