import { notFound } from "next/navigation";
import { getProfileByUsername } from "@/utils/user/getProfileByUsername";
import { createClient } from "@/utils/supabase/server";
import UserAccountPage from "@/app/user/[username]/UserAccountPage";
import { getUserArticles } from "@/utils/article/getUserArticles";
import { signout } from "@/utils/serverActions/signout";

const UserPage = async ({ params }) => {
    const username = params.username;

    const supabase = await createClient();
    const {
        data: { user: currentUser },
    } = await supabase.auth.getUser();

    // Get the requested profile
    const { data: profile, error: profileError, status } = await getProfileByUsername(username);

    if (profileError) {
        if (status === 404) {
            notFound();
        } else {
            throw typeof profileError === "string" ? new Error(profileError) : profileError;
        }
    }

    if (!profile) {
        notFound();
    }

    const { data: articles, error, count } = await getUserArticles(profile.id);

    // Determine if the viewer is the profile owner
    const isOwnProfile = currentUser?.id === profile.id;

    return (
        <UserAccountPage
            profile={profile}
            articles={articles}
            handleSignout={signout}
            isOwnProfile={isOwnProfile}
        />
    );
};

export default UserPage;
