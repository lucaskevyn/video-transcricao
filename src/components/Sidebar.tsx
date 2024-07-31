'use client';

import { Bell, BellIcon, Cookie, CookieIcon, CreditCard, Inbox, MessageSquare, Settings, User, CircleHelp} from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
export default function Sidebar () {
    const [notifications, setNotifications] = useState<any>([
        {
            text: "This is a notification",
            date: "25-07-2024",
            read: true
        },
        {
            text: "This is another notification",
            date: "25-07-2024",
            read: false
        }]) 
    const menuList = [
        {
        group: "General",
        items: [
            {
                link: "/",
                icon: <User />,
                text: "Profile" 
            },
            {
                link: "/",
                icon: <Inbox />,
                text: "Inbox" 
            },
            {
                link: "/",
                icon: <CreditCard />,
                text: "Billing" 
            },
            {
                link: "/",
                icon: <Bell/>,
                text: "Notifications" 
            }
            
        ]
    },
    {
        group: "Settings",
        items: [
            {
                link: "/",
                icon: <Settings />,
                text: "General Settings" 
            },
            {
                link: "/",
                icon: <CookieIcon />,
                text: "Privacy" 
            },
            {
                link: "/",
                icon: <MessageSquare />,
                text: "Logs" 
            }
        ]  
    }
]
    return <div className="fixed flex flex-col gap-4 w-[200px] min-w-[200px] p-4 min-h-screen">
    <div className="grow">
    <Command style={{overflow: 'visible'}} >
    <CommandList style={{overflow: 'visible'}}>
    {menuList.map ((menu: any, key: number) => ( <CommandGroup key={key} heading={menu.group}>
    {menu.items.map((option: any, optionKey: number) => <CommandItem key={optionKey} className="flex gap-2 cursor-pointer  ">
        {option.icon}
        {option.text}
        </CommandItem>)}
        </CommandGroup>
    ))}
    </CommandList>
    </Command>
    </div> 
    <div><Button className="relative" variant="outline" size="icon">
        <div className={`absolute -top-2 -right-1 h-3 w-3 `}></div>
    <CircleHelp className="h-4 w-4" />
    </Button></div>
    </div>;
}
