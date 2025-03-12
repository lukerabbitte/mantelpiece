import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export const updateSession = async (request) => {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const path = request.nextUrl.pathname;

    const isPublicPath =
        path === "/user" ||
        path === "/" ||
        path.startsWith("/posts") ||
        path.startsWith("/auth/confirm") ||
        path.startsWith("/auth/callback");

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Do not run code between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    // IMPORTANT: DO NOT REMOVE auth.getUser()

    const {
        data: { user },
    } = await supabase.auth.getUser();

    console.log("Middleware path:", path);
    console.log("Is public path:", isPublicPath);
    console.log("User exists:", !!user);
    console.log("User:", user);

    if (!user && !isPublicPath) {
        // Check if we're coming from a signout
        const fromSignout = request.nextUrl.searchParams.get("from") === "signout";

        if (fromSignout) {
            // User explicitly signed out, let them go to home page
            const homeUrl = request.nextUrl.clone();
            homeUrl.pathname = "/";
            // Remove the 'from' parameter
            homeUrl.searchParams.delete("from");
            return NextResponse.redirect(homeUrl);
        }
        
        // no user, potentially respond by redirecting the user to the user page
        const url = request.nextUrl.clone();
        url.pathname = "/user";
        return NextResponse.redirect(url);
    }

    // IMPORTANT: You *must* return the supabaseResponse object as it is.
    // If you're creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so:
    //    const myNewResponse = NextResponse.next({ request })
    // 2. Copy over the cookies, like so:
    //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
    // 3. Change the myNewResponse object to fit your needs, but avoid changing
    //    the cookies!
    // 4. Finally:
    //    return myNewResponse
    // If this is not done, you may be causing the browser and server to go out
    // of sync and terminate the user's session prematurely!

    return supabaseResponse;
};
