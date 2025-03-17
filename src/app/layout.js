import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
    title: "Mantelpiece",
    description: "Mantelpiece is a platform for journalism portfolios",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen flex flex-col">
                <ThemeProvider attribute="class" defaultTheme="system">
                    <Navbar />
                    <main className="flex-grow p-4">{children}</main>
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
