import React from "react";
import { cn } from "@/lib/utils";
import ChevronIcon from "@/components/Icons/ChevronIcon";

interface EmailInputArrowProps {
    placeholder?: string;
    onClick?: () => void;
    className?: string;
}

const EmailInputArrow = ({
                             placeholder = "Email address",
                             onClick,
                             className,
                         }: EmailInputArrowProps) => {
    return (
        <div
            className={cn(
                "flex items-stretch w-full max-w-[420px] overflow-hidden",
                className
            )}
        >
            <input
                type="email"
                placeholder={placeholder}
                className="flex-1 px-4 text-trebuchet-14 text-gray-600 bg-white outline-none h-10 sm:h-14"
            />
            <button
                onClick={onClick}
                className="w-12 sm:w-14 bg-[var(--light-red)] hover:bg-[var(--mid-red)] flex items-center justify-center transition-all duration-300"
            >
                <ChevronIcon className="rotate-180 text-white w-4 h-4" />
            </button>
        </div>
    );
};

export default EmailInputArrow;
