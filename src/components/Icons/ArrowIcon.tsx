import React from "react"

interface ArrowIconProps {
    className?: string
    width?: number
    height?: number
    strokeWidth?: number
}

export default function ArrowIcon({
    className = "",
    width = 40,
    height = 40,
    strokeWidth = 1
}: ArrowIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M5 20H35"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            <path
                d="M28.3333 15L35 20L28.3333 25"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}