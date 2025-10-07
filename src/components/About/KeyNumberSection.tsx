import React from 'react';
import Image from 'next/image';
import {ArrowLink} from "@/components/ArrowLink";

const KeyNumberSection = () => {
    return (
        <section className="
            w-full
            bg-[linear-gradient(to_bottom,_var(--background-grey)_0%,_var(--background-grey)_40%,_white_40%,_white_100%)]
            pt-8 md:pt-16
            pb-8 md:pb-20
        ">
            <div
                className={"container"}
            >
                <div className={"lg:ml-[120px] w-full flex flex-col"}>
                    <h2 className={"text-tstar-42 font-light "}>Daya Dimensi In Numbers</h2>
                    <div className={"w-full grid grid-cols-1 md:grid-cols-3 mt-3"}>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-tstar-72 font-light text-[var(--light-red)] p-0"}>
                                24+ Years
                            </h1>
                            <p className={"text-trebuchet-20 font-normal text-black/40 -mt-5"}>Experience</p>
                        </div>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-tstar-72 font-light text-[var(--light-red)] p-0"}>
                                50.000+
                            </h1>
                            <p className={"text-trebuchet-20 font-normal text-black/40 -mt-5"}>Executive Clients</p>
                        </div>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-tstar-72 font-light text-[var(--light-red)] p-0"}>
                                400+
                            </h1>
                            <p className={"text-trebuchet-20 font-normal text-black/40 -mt-5"}>Organization Clients</p>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 lg:grid-cols-[481px_584px] gap-8 w-full mt-8"}>
                        <div className={"flex flex-col gap-4"}>
                            <div>
                                <Image
                                    src={"/assets/images/leader-of-new-planet.png"}
                                    alt={"leader-of-new-planet"}
                                    height={481}
                                    width={481}
                                />
                            </div>
                            <h5 className={"text-tstar-36 font-light"}>Leaders of a New Planet</h5>
                            <p className={"text-trebuchet-16 font-normal text-[var(--dark-grey)]"}>
                                It is our intention is to generate leaders whose mission is to advance humanity through
                                fresh ideas, forefront skills, and compassion for future generations. We call them
                                Leaders of a New Planet.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-4 items-start"}>
                            <div>
                                <Image
                                    src={"/assets/images/subsidiary.png"}
                                    alt={"leader-of-new-planet"}
                                    height={584}
                                    width={778}
                                />
                            </div>
                            <h5 className={"text-tstar-36 font-light"}>Continuous Innovations</h5>
                            <p className={"text-trebuchet-16 font-normal text-[var(--dark-grey)]"}>
                                In working with clients, we curate and provide integrated business and leadership solutions. Therefore, we strive to grow our digital solutions to better cater your needs.
                            </p>
                            <ArrowLink href={"#"} text={"LEARN MORE"} variant={"red"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyNumberSection;