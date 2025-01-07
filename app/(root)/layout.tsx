import React from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";


export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-screen">
            <main className="flex-1 wrapper">
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    );
}