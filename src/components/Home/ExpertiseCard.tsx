"use client"

import React from "react"
import { cn } from "@/lib/utils"
import ArrowIcon from "@/components/Icons/ArrowIcon"
import BubbleBackground from "@/components/Home/BubbleBackground";

interface ExpertiseCardProps {
    title: string
    icon: React.ReactNode
    href?: string
    withBackgroundImage?: boolean
}

const ExpertiseCard = ({
                           title,
                           icon,
                           href,
                           withBackgroundImage = false,
                       }: ExpertiseCardProps) => {
    return (
        <div
            className={cn(
                "h-[379px] relative flex overflow-hidden text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                !withBackgroundImage && "bg-[var(--mid-red)]"
            )}
        >
            {withBackgroundImage && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(/assets/images/meet-expertise.png)`
                        }}
                    />
                    <div className="absolute inset-0 bg-black/40 z-[1]" />
                </>
            )}

            {!withBackgroundImage && (
                <>
                    <BubbleBackground className="-top-[100px] -right-[50px] w-[407px] h-[407px]" />
                    <BubbleBackground className="-bottom-[300px] -left-[140px] w-[552px] h-[552px]" />
                </>
            )}

            <div className="relative z-10 flex h-full w-full flex-col justify-between p-6">
                <div className="flex flex-col gap-4">
                    <div className="text-white">{icon}</div>
                    <h3 className="text-tstar-36 font-light leading-tight">{title}</h3>
                </div>

                <div className="flex justify-end">
                    <ArrowIcon className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    )
}

export default ExpertiseCard