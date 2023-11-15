'use server';

import React from 'react'
import Link from "next/link";

export default async function Navbar(): Promise<React.JSX.Element> {
    return (
        <>
            <nav className="bg-gray-950 sticky top-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Hexa Ledger
                    </span>
                    </Link>
                    <div className="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                aria-expanded="false"
                                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200
                            dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">
                            Search
                        </span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full px-2 py-1 pl-10 text-sm  border-2  rounded-xl
                         bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500
                          focus:border-blue-500" placeholder="Search..."/>
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg
                    md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                         id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm  border rounded-lg
                        bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="Search..."/>
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg
                         md:flex-row md:space-x-8 md:mt-0 md:border-0  border-gray-700">
                            <li><Link href="#"
                                      className="block py-2 pl-3 pr-4 text-white  md:p-0 md:text-blue-500"
                                      aria-current="page">
                                Threads
                            </Link></li>
                            <li><Link href="#" className="block py-2 pl-3 pr-4 rounded md:p-0
                            md:hover:text-blue-500 text-white  dark:hover:text-white border-gray-700">
                                Users
                            </Link></li>
                            <li><Link href="#" className="block py-2 pl-3 pr-4 rounded  md:p-0 text-white
                            md:hover:text-blue-500  hover:text-white  border-gray-700">
                                Services
                            </Link></li>
                        </ul>
                    </div>
                </div>
                <ul className="flex bg-gray-950 border-t-2">
                    <li className="text-center min-w-24 overflow-hidden pt-2 border-b-2 border-b-purple-600 text-sm px-6 pb-2">Threads</li>
                    <li className="text-center min-w-24 overflow-hidden pt-2 border-b-2 text-sm px-6 pb-2 hover:border-b-blue-500">Product</li>
                    <li className="text-center min-w-24 overflow-hidden pt-2 border-b-2 text-sm px-6 pb-2 hover:border-b-blue-500">Mogurt</li>
                    <li className="text-center min-w-24 overflow-hidden pt-2 border-b-2 text-sm px-6 pb-2 hover:border-b-blue-500">Popular</li>
                    <li className="text-center min-w-24 overflow-hidden pt-2 border-b-2 text-sm px-6 pb-2 hover:border-b-blue-500">Pepegata</li>
                    <li className="text-center min-w-24 overflow-hidden pt-2 border-b-2 text-sm px-6 pb-2 hover:border-b-blue-500">Information</li>
	                  <li className="overflow-hidden pt-2 border-b-2 text-sm pb-2 w-full"></li>
                </ul>
            </nav>

        </>
    );
}
