"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import UserArticles from "@/components/UserArticles";
import CtaButton from "@/components/CtaButton";
import { useState } from "react";

const UserAccountPage = ({ profile, articles, handleSignout, isOwnProfile }) => {
    const router = useRouter();
    const [isSigningOut, setIsSigningOut] = useState(false);

    const handleSignoutClick = async () => {
        try {
            setIsSigningOut(true);
            const result = await handleSignout();

            if (result.success) {
                toast.success(result.message || "Signed out successfully");
                router.push("/?from=signout");
            } else {
                toast.error(result.error || "Something went wrong");
                setIsSigningOut(false);
            }
        } catch (error) {
            console.error("Sign out error:", error);
            toast.error("Sign out failed. Please try again.");
            setIsSigningOut(false);
        }
    };

    return (
        <div className="min-h-screen-minus-navbar-and-footer text-center flex flex-col gap-4 items-center justify-between">
            <h1 className="text-3xl font-bold">
                {profile.display_name || profile.username}'s Profile
            </h1>

            <UserArticles articles={articles} isOwnProfile={isOwnProfile} />

            {isOwnProfile && (
                <CtaButton
                    text={isSigningOut ? "Signing out..." : "Sign Out"}
                    handleClick={handleSignoutClick}
                    disabled={isSigningOut}
                />
            )}
        </div>
    );
};

export default UserAccountPage;
