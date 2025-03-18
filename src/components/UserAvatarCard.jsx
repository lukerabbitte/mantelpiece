import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatarCard = ({ avatarImage, displayName, bio }) => {
    return (
        <div className="flex flex-col items-center gap-4 bg-card rounded-xl p-4">
            <Avatar className="w-24 h-24">
                <AvatarImage src={avatarImage} className="w-full h-full rounded-full" />

                <AvatarFallback>
                    <div className="w-full h-full rounded-full bg-muted"></div>
                </AvatarFallback>
            </Avatar>

            <h1 className="text-balance text-5xl font-bold">{displayName}</h1>
            <p>{bio}</p>
        </div>
    );
};

export default UserAvatarCard;
