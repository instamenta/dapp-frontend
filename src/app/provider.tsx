'use client';

import React from 'react'
import {Web3Provider} from '@/lib/context/contract.context';

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <Web3Provider>
            {children}
        </Web3Provider>
    )
}
