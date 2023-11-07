'use client';

import React from 'react'

type IProps = { icon: React.ReactNode, text: string };

export default function SidebarItem({icon, text}: IProps) {
    return (
        <div
            className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
            {icon}
        </div>
    )
}
