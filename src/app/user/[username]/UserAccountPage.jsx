"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import UserArticles from "@/components/UserArticles";
import CtaButton from "@/components/CtaButton";
import { useState } from "react";
import UserAvatarCard from "@/components/UserAvatarCard";

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
        <div className="w-full min-h-screen-minus-navbar-and-footer text-center flex flex-col gap-8 items-center justify-between">
            <UserAvatarCard
                avatarImage={profile.avatar_url}
                displayName={profile.display_name || profile.username}
                bio={profile.bio}
            />

            <UserArticles articles={articles} isOwnProfile={isOwnProfile} />

            {isOwnProfile && (
                <CtaButton
                    text={isSigningOut ? "Signing out..." : "Sign Out"}
                    handleClick={handleSignoutClick}
                    disabled={isSigningOut}
                    size={"medium"}
                />
            )}
        </div>
    );
};

export default UserAccountPage;
