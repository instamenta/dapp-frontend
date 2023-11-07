'use client';

import React from 'react';
import Contracts from '../../lib/hooks/contract.hook'
import {ethers} from "ethers";

const Header: React.FC = (): React.JSX.Element => {
    const [metaSigner, setMetaSigner] = React.useState<ethers.JsonRpcSigner | null>(null);
    const [metaProvider, setMetaProvider] = React.useState<ethers.BrowserProvider | null>(null);
    const [balance, setBalance] = React.useState<string>('');

    React.useEffect(() => {
        Contracts.useMetamask().then(async (data) => {
            setMetaProvider(data.metaProvider);
            setMetaSigner(data.metaSigner);
            if (metaProvider) {
                const bal = await metaProvider!.getBalance(metaSigner!.address);
                setBalance(ethers.formatEther(bal));
            }
        }).catch(console.error)
    }, [metaProvider, metaSigner]);

    return (
        <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-neutral-950">
            <div className="flex flex-shrink-0 items-center space-x-4">
                <div className="flex flex-col items-end  ">
                    <div className="text-md font-normal text-sm text-neutral-400 ">{metaSigner?.address}</div>
                    <div className="text-sm font-thin text-slate-200">{balance} ETH</div>
                </div>
                <div
                    className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400 overflow-hidden">
                    <img alt="profilePic"
                         src="https://img.freepik.com/free-vector/digital-asset-nft-blockchain-technology-background_1017-41103.jpg"/>
                </div>
            </div>
        </header>
    );
};

export default Header;