import React from 'react';
import {ArrowLink} from "@/components/ArrowLink";
import Image from "next/image";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import {cn} from "@/lib/utils";

const UpcomingActivitiesSection = () => {
    const activities = [
        {
            type: "PUBLIC WORKSHOP",
            title: "Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout",
            date: "25 Feb 2022"
        },
        {
            type: "BUKA PINTU",
            title: "Our New Solution To Hire The Right Person For Your Company",
            date: "20 Oct 2021"
        },
        {
            type: "LIVE WEBINAR",
            title: "DDI : Among Indonesia’s First Signatories of UN WEP",
            date: "20 Oct 2021"
        },
        {
            type: "BUKA PINTU",
            title: "Our New Solution To Hire The Right Person For Your Company",
            date: "20 Oct 2021"
        },
    ]

    return (
        <section className={"py-16 bg-white"}>
            <div className={"container w-full flex flex-col"}>
                <div className={"w-full flex flex-col md:flex-row items-start md:items-center justify-between"}>
                    <h2 className={"text-tstar-42 font-light"}>Upcoming Activities</h2>
                    <ArrowLink href="#" text="View All" variant="red"/>
                </div>
                <div className={"w-full flex flex-col md:flex-row mt-4"}>
                    <div className={""}>
                        <div>
                            <Image
                                src="/assets/images/webinar.png"
                                alt={"webinar"}
                                width={481}
                                height={481}
                            />
                        </div>
                    </div>
                    <div className={"flex flex-col gap-4"}>
                        <div className={"w-full h-[1px] bg-gray-200"}/>
                        <div className={"flex flex-col w-full p-0 md:pl-16"}>
                            {activities.map((activity, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "w-full grid grid-cols-1 md:grid-cols-[150px_1fr] pt-2 mt-1 pb-8 hover:cursor-pointer",
                                        activities.length === index + 1 ? "" : "border-b-[1px] border-gray-200"
                                    )}>
                                    <div className={"flex flex-col gap-2"}>
                                        <h4 className={"text-trebuchet-14 text-[var(--mid-red)] font-normal"}>
                                            {activity.type}
                                        </h4>
                                        <p className={"text-trebuchet-13 text-black/40"}>
                                            {activity.date}
                                        </p>
                                    </div>
                                    <div className={"flex items-start justify-between gap-4"}>
                                        <h2 className={"text-tstar-24 font-medium text-black"}>
                                            {activity.title}
                                        </h2>
                                        <ArrowIcon className={"w-[24px] h-[24px] text-[var(--light-red)] "}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingActivitiesSection;