import React from 'react';

import {Threads, Threads__factory} from '../../../hardhat/typechain-types';
import {ethers, Wallet, JsonRpcProvider} from 'ethers';
import contract_config from '../config/contract.config';

interface Web3ContextValue {
    Threads: Threads;
    signer: Wallet;
    provider: JsonRpcProvider;
}

export const Web3Context = React.createContext<Web3ContextValue | undefined>(undefined);

export function Web3Provider({children}: { children: React.ReactNode }) {
    const provider = new ethers.JsonRpcProvider(contract_config.provider_url);
    const signer = new ethers.Wallet(contract_config.Threads.deployer_private_key, provider);

    const value: Web3ContextValue = {
        Threads: Threads__factory.connect(contract_config.Threads.address, signer),
        signer,
        provider
    };

    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}

