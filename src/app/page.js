"use client";

import "@/app/globals.css";
import FloatingText from "@/components/FloatingText";
import BioText from "@/components/BioText";
import CtaCard from "@/components/CtaCard";
import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
    const router = useRouter();
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
            successMessage && toast.success(successMessage); // Toast message not working for some reason, WTF

            const newSearchParams = new URLSearchParams(searchParams.toString());
            newSearchParams.delete("success");
            const remainingParams = newSearchParams.toString();
            const cleanUrl = remainingParams ? `${pathname}?${remainingParams}` : pathname;

            router.replace(cleanUrl, { scroll: false });
        }
    }, [searchParams, router, pathname]);

    return (
        <div className="flex flex-col gap-4">
            <FloatingText text="Caroline Kelly" />
            <BioText />
            <CtaCard
                text="Articles"
                href="/posts"
                imageSrc="/images/carosketch.jpg"
                imageAlt="Sketched background image for the view all articles CTA"
            />
        </div>
    );
}
