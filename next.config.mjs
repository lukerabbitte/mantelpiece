import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "media.journoportfolio.com",
            "dguxgqkjozjsamxnfezv.supabase.co",
            "media.hotpress.com",
        ],
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
