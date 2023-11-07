import {Inter} from 'next/font/google';
import type {Metadata} from 'next';
import React from "react";
import './globals.css';

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
        {children}
        </body>
        </html>
    );
};

export default RootLayout;