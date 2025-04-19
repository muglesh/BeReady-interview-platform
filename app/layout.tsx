import type {Metadata} from "next";
import {Mona_Sans} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import React from "react";

const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "BeReady",
    description: "An AI-powered interview preparation platform",
};

const RootLayout = async ({children}: Readonly<{ children: React.ReactNode; }>) => {
    // const isUserAuthenticated = await isAuthenticated();
    // if (!isUserAuthenticated) redirect('/sign-in');
    return (
        <html lang="en" className="dark">
        <body
            className={`${monaSans.className} antialiasing pattern`}
        >
        {children}
        <Toaster/>
        </body>
        </html>
    );
}
export default RootLayout;