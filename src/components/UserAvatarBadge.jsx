import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatarBadge = ({ avatarImage, displayName }) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <span className="lg:font-medium text-balance">{displayName}</span>
            <Avatar>
                <AvatarImage src={avatarImage} className="w-full h-full rounded-full" />

                <AvatarFallback>
                    <div className="w-full h-full rounded-full bg-muted"></div>
                </AvatarFallback>
            </Avatar>
        </div>
    );
};

export default UserAvatarBadge;
