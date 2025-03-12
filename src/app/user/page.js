import { login } from "@/utils/serverActions/login";
import { signup } from "@/utils/serverActions/signup";
import { signout } from "@/utils/serverActions/signout";
import LoginForm from "@/components/LoginForm";
import { createClient } from "@/utils/supabase/server";
import UserAccount from "@/components/UserAccount";

const UserPage = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    console.log("data from user page", data);

    return (
        <div className="w-full h-full">
            {data.user ? (
                <div>
                    <UserAccount signout={signout} />
                </div>
            ) : (
                <div className="flex flex-col w-full h-screen items-center justify-start">
                    <LoginForm login={login} signup={signup} />
                </div>
            )}
        </div>
    );
};

export default UserPage;
