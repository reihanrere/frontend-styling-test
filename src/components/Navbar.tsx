"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
        <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black to-transparent">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Logo"
                        width={160}
                        height={50}
                        priority
                    />
                </div>

                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">
                        {MENU.map((item) => {
                            const isActive = pathname === item.link;
                            return (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink
                                        asChild
                                        data-active={isActive}
                                    >
                                        <Link href={item.link}>{item.title}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}
