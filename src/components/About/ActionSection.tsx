'use client'

import React, { useState } from "react";
import { ArrowLink } from "@/components/ArrowLink";

const items = [
    {
        title: "Family",
        description: "Introducing the DayaLima Family",
        image: "/assets/images/family.png",
    },
    {
        title: "Board of Management",
        description: "Meet our leaders and innovators",
        image: "/assets/images/family.png",
    },
    {
        title: "Partners",
        description: "Collaborating with great minds",
        image: "/assets/images/family.png",
    },
];

const ActionSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            className="w-full h-[600px] bg-center bg-cover"
            style={{ backgroundImage: `url("/assets/images/family.png")` }}
        >
            <div className="container h-full grid grid-cols-1 md:grid-cols-3 items-end py-8 gap-8 md:py-16 text-white">
                {items.map((item, index) => {
                    const isActive = hoveredIndex === index;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`flex flex-col items-start gap-3 border-b pb-4 transition-all duration-500 ease-out
                                ${isActive ? "border-white text-white" : "border-white/80 text-white/80"}
                            `}
                        >
                            <h3 className="text-tstar-42 font-light">{item.title}</h3>

                            <div
                                className={`flex flex-col items-start gap-2 overflow-hidden transition-all duration-500 ease-out
                                    ${isActive ? "opacity-100 translate-y-0 max-h-40" : "opacity-0 translate-y-4 max-h-0"}
                                `}
                            >
                                <p className="text-trebuchet-16 font-normal">{item.description}</p>
                                <ArrowLink href="#" text="LEARN MORE" variant="white" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ActionSection;
