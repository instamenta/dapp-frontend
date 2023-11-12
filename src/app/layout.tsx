import {Inter} from 'next/font/google';
import type {Metadata} from 'next';
import React from "react";
import './globals.css';
import Provider from "@/app/provider";
import Navbar from "@/components/navigation";
import Footer from '@/components/static/Footer'

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
        <Provider>
            <Navbar/>
            <main className="min-w-full min-h-screen bg-indigo-900">
                {children}
            </main>
        </Provider>

        <Footer/>
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
