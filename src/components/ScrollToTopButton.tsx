"use client"

import React, { useEffect, useState } from "react"
import ChevronIcon from "@/components/Icons/ChevronIcon"
import { cn } from "@/lib/utils"
import ArrowIcon from "@/components/Icons/ArrowIcon";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 1000)
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                "fixed bottom-56 right-10 md:right-24 z-50 flex items-center justify-center rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-[var(--light-red)] hover:bg-[var(--mid-red)] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}
        >
            <ArrowIcon className="-rotate-90 w-4 h-4 text-current" />
        </button>
    )
}

export default ScrollToTopButton
