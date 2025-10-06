import { cn } from "@/lib/utils"
import React from "react"

interface BubbleBackgroundProps {
    className?: string
}

const BubbleBackground = ({ className }: BubbleBackgroundProps) => (
    <div
        className={cn(
            "absolute rounded-full bg-[var(--dark-red)] opacity-30 aspect-square",
            "w-[40vw] max-w-[640px] min-w-[240px]",
            className
        )}
    />
)

export default BubbleBackground
