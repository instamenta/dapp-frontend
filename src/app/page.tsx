'use client';

import React from "react";
import Contracts from "@/lib/hooks/contract.hook";
import {ethers} from "ethers";
import {v4 as uuid} from 'uuid'

export default function Home(): React.JSX.Element {
    const {Threads} = Contracts.useContracts();

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

    const handleCreateThread = async (event: React.MouseEvent) => {
        event.preventDefault();
        console.log('===============')
        try {
            const _targetId = uuid();
            const _name = "NAME";
            const _content = 'CONTENT';
            const tx = await Threads.connect(metaSigner)
                .createThread(_targetId, _name, _content, {value: ethers.parseEther('0.0001')})
            console.log(tx)
            await tx.wait()
            console.log(tx);
        } catch (e) {
            console.error(e);
        }
    }

    const handleGetThreads = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.getThreads(0, 10);
            data.forEach(thread => {
                console.log({
                    content: thread.content,
                    name: thread.name,
                    id: thread.id,
                    creator: thread.creator,
                    likes: thread.likes.toString(),
                    dislikes: thread.dislikes.toString(),
                    commentIds: JSON.stringify(thread.commentsIds)
                })
            })
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="w-full bg-slate-600 h-full flex justify-center">
            <div className="p-16">
                <h1 className="font-bold ">
                    Threads
                </h1>
                <button onClick={handleCreateThread} className="border-b-black border-l-black border-4 w-32 h-8">
                    Create Thread
                </button>
                <button onClick={handleGetThreads} className="border-b-black border-l-black border-4 w-32 h-8">
                    getThreads
                </button>
                {/*<button onClick={handleCreate} className="border-b-black border-l-black border-4 w-32 h-8">*/}
                {/*    Create Thread*/}
                {/*</button>*/}
                {/*<button onClick={handleCreate} className="border-b-black border-l-black border-4 w-32 h-8">*/}
                {/*    Create Thread*/}
                {/*</button>*/}

            </div>
        </div>
    );
};
