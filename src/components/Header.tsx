'use client' ;

import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import UserItem from "@/components/UserItem";


export default function Header () {
    const [notifications, setNotifications] = useState<any>([])

    return <div className="w-full grid grid-cols-2 gap-4 p-4 border-b">
    <CommandDemo />
    <div className="flex items-center justify-end">
    
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    </DropdownMenuTrigger>
    <div>
        <UserItem/>
    </div>
    <DropdownMenuContent align="end">
    {notifications.map((item: any, key: number) => <DropdownMenuItem key = {key}
    className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
        <div className={`h-3 w-3 rounded-full my-1 ${!item.read ?  'bg-green-500' : 'bg-neutral-200'}`}></div>
        <div>
        <p>{item.text}</p>
        <p className="text-xs text-neutral-500">{item.date}</p>
        </div>
    </DropdownMenuItem> )}
    </DropdownMenuContent>
</DropdownMenu>
        </div>
    </div>;
}