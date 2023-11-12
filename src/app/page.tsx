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
                    balance: thread.balance,
                    creator: thread.creator,
                    likes: thread.likes.toString(),
                    dislikes: thread.dislikes.toString(),
                    commentIds: JSON.stringify(thread.commentsIds)
                });
            });
        } catch (e) {
            console.error(e);
        }
    }

    const handleGetThreadsLength = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.getThreadsLength();
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }

    const handleGetComments = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.getComments('_targetId',0, 10);
            data.forEach(comment => {
                console.log({
                    id: comment.id,
                    balance: comment.balance,
                    content: comment.content,
                    creator: comment.creator,
                });
            });
        } catch (e) {
            console.error(e);
        }
    }

    const handleGetCommentLength = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.getCommentsLength('_Target');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }

    const handleGetUsers = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.getUsers(0, 10);
            data.forEach(user => {
                console.log({
                    id: user.id,
                    contributions: user.contributions,
                    threads: user.threads,
                    comments: user.comments,
                });
            });
        } catch (e) {
            console.error(e);
        }
    }

    const handleGetUsersLength = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.getUsersLength();
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }

    const handlePromoteThread = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.promoteThread('_target');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }
    const handleDonateThread = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.donate('_target');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }
    const handleLikeThread = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.like('_target');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }
    const handleDislikeThread = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.dislike('_target');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }
    const handleLikeComment = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.likeComment('_target', '_comment');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }
    const handleDislikeComment = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.dislikeComment('_target', '_comment');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }
    const handleWithdrawThread = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.withdrawThread('_target', 'amount');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }
    const handleWithdrawComment = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            const data = await Threads.withdrawComment('_target','comment', 'amount');
            const num = Number(data);
            console.log(num);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="w-full h-full flex justify-center">
            <div className="p-16">
                <h1 className="font-bold ">
                    Threads
                </h1>
                <br/>
                <button onClick={handleCreateThread} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    Create Thread
                </button>
                <br/>
                <button onClick={handleGetThreads} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    getThreads
                </button>
                <br/>
                <button onClick={handleGetComments} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    handleGetComments
                </button>
                <br/>
                <button onClick={handleGetUsers} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    handleGetUsers
                </button>
                <br/>
                <button onClick={handleGetThreadsLength} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    GetThreadsLength
                </button>
                <br/>
                <button onClick={handleGetCommentLength} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    GetCommentLength
                </button>
                <br/>
                <button onClick={handleGetUsersLength} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    GetUsersLength
                </button>
                <br/>
                <button onClick={handlePromoteThread} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    PromoteThread
                </button>
                <br/>
                <button onClick={handleDonateThread} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    DonateThread
                </button>
                <br/>
                <button onClick={handleLikeThread} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    LikeThread
                </button>
                <br/>
                <button onClick={handleDislikeThread} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    DislikeThread
                </button>
                <br/>
                <button onClick={handleLikeComment} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    LikeComment
                </button>
                <br/>
                <button onClick={handleDislikeComment} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    DislikeComment
                </button>
                <br/>
                <button onClick={handleWithdrawThread} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    WithdrawThread
                </button>
                <br/>
                <button onClick={handleWithdrawComment} className="border-b-black border-l-black border-4 min-w-fit px-2 min-h-fit">
                    WithdrawComment
                </button>


            </div>
        </div>
    );
};
