"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose, SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

const MENU = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Expertise", link: "/expertise" },
    { title: "Program", link: "/program" },
    { title: "Odyssey", link: "/odyssey" },
    { title: "News", link: "/news" },
    { title: "Contact", link: "/contact" },
    { title: "Career", link: "/career" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Logo"
                        width={160}
                        height={50}
                        priority
                    />
                </Link>

                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-6">
                            {MENU.map((item) => {
                                const isActive = pathname === item.link;
                                return (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink
                                            asChild
                                            data-active={isActive}
                                            className={cn(
                                                "relative text-white text-tstar-18 font-light tracking-wide px-2 py-1 transition-all",
                                                "hover:text-white hover:font-bold",
                                                "data-[active=true]:font-bold data-[active=true]:after:content-[''] data-[active=true]:after:absolute data-[active=true]:after:left-1/2 data-[active=true]:after:-translate-x-1/2 data-[active=true]:after:-bottom-1 data-[active=true]:after:w-1.5 data-[active=true]:after:h-1.5 data-[active=true]:after:bg-red-500 data-[active=true]:after:rounded-full"
                                            )}
                                        >
                                            <Link href={item.link}>{item.title}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger className="flex items-center justify-center text-white focus:outline-none">
                            <Menu className="w-7 h-7" />
                        </SheetTrigger>

                        <SheetContent side="right" className="bg-black text-white">
                            <VisuallyHidden>
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </VisuallyHidden>
                            <div className="flex flex-col h-full pt-16 px-6">
                                <ul className="flex flex-col space-y-6 text-lg">
                                    {MENU.map((item) => {
                                        const isActive = pathname === item.link;
                                        return (
                                            <li key={item.title}>
                                                <SheetClose asChild>
                                                    <Link
                                                        href={item.link}
                                                        className={cn(
                                                            "block w-full transition-all",
                                                            isActive
                                                                ? "font-bold text-red-500"
                                                                : "text-white hover:text-red-400"
                                                        )}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </SheetClose>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-auto pb-6 text-sm text-gray-400">
                                    Copyright © 2022 Daya Dimensi Indonesia. Website crafted
                                    by Antikode.
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
