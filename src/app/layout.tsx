import {Inter} from 'next/font/google';
import type {Metadata} from 'next';
import React from "react";
import './globals.css';
import Header from "@/components/navigation/Header";
import Sidebar from "@/components/navigation/Sidebar";
import Provider from "@/app/provider";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Hexa Ledger',
    description: 'Web3 DAPP',
};

type LayoutProps = { children: React.ReactNode };

const RootLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="h-screen w-full bg-white relative flex overflow-hidden">
            <Provider>
                <Sidebar/>

                <div className="w-full h-full flex flex-col justify-between">
                    <Header/>
                    <main className="max-w-full h-full flex relative overflow-y-hidden">
                        {children}
                    </main>
                </div>
            </Provider>

        </div>

        </body>
        </html>
    );
};

export default RootLayout;

// import { Metadata } from 'next';
//
// export const metadata: Metadata = {
//     title: {
//         default: 'Next.js App Router',
//         template: '%s | Next.js App Router',
//     },
//     description:
//         'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
//     openGraph: {
//         title: 'Next.js App Router Playground',
//         description:
//             'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
//         images: [`/api/og?title=Next.js App Router`],
//     },
//     twitter: {
//         card: 'summary_large_image',
//     },
// };
