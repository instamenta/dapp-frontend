'use client';

import React from 'react';
import Link from "next/link";

export default function Error({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
}): React.JSX.Element {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center dark:bg-gray-900">
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-9xl dark:text-gray-700">{error.name || 'Unknown Error'}</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Uh-oh!
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {error.message || 'Additional data not provided'}
                </p>
                <Link href="/" className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring w-36">
                    Take me home
                </Link>
                <button className="ml-8 inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring w-36">
                    Try again
                </button>
            </div>
        </div>
    );
};
