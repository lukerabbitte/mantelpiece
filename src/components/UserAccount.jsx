"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const UserAccount = ({ signout }) => {
    const router = useRouter();

    const handleSignout = async () => {
        try {
            const result = await signout();

            if (result.success) {
                toast.success(result.message);
                router.push("/?from=signout");
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            console.error(error);
            toast.error("Sign out failed :(");
        }
    };

    return (
        <div>
            <p>Cool</p>
            <Button
                onClick={handleSignout}
                size="evenPad"
                title="Sign Out"
                className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full w-fit"
            >
                <div className="bg-primary-foreground rounded-full flex justify-center items-center w-fit">
                    <span className="text-foreground text-nowrap px-2.5 py-1 font-black">
                        Sign Out
                    </span>
                </div>
            </Button>
        </div>
    );
};

export default UserAccount;
