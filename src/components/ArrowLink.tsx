"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import NextIcon from "../../public/assets/icons/ic_next.svg"
import ArrowIcon from "@/components/Icons/ArrowIcon";

interface ArrowLinkProps {
    href: string
    text: string
    variant?: "red" | "white" | "lightGrey"
    className?: string
}

export function ArrowLink({
                              href,
                              text,
                              variant = "white",
                              className,
                          }: ArrowLinkProps) {
    const baseStyles =
        "group flex items-center justify-center gap-2 font-bold tracking-wide leading-none transition-colors"

    const variants = {
        white: "text-white hover:text-[var(--white-80)]",
        red: "text-[var(--light-red)] hover:text-[var(--mid-red)]",
        lightGrey: "text-black/40 hover:text-black",
    }

    return (
        <Link
            href={href}
            className={cn(baseStyles, variants[variant], className)}
        >
            <span className="text-tstar-16 text-nowrap">{text}</span>

            <ArrowIcon
                className="w-[24px] h-[16px] mb-1 translate-y-[1px] transition-transform duration-200 group-hover:translate-x-1"
            />
        </Link>
    )
}