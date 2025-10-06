import React from "react";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { cn } from "@/lib/utils";

interface ArrowChevronProps {
    type?: "left" | "right";
    className?: string;
}

const ArrowChevron = ({ type = "left", className }: ArrowChevronProps) => {
    return (
        <div
            className={cn(
                "group p-2 border border-white rounded-full flex items-center justify-center transition-all duration-300 ease-out",
                "hover:bg-white/10 hover:scale-105 hover:border-[var(--light-red)] cursor-pointer",
                className
            )}
        >
            <ChevronIcon
                className={cn(
                    "transition-transform duration-300 ease-out text-white",
                    type === "right" ? "rotate-180" : ""
                )}
            />
        </div>
    );
};

export default ArrowChevron;
