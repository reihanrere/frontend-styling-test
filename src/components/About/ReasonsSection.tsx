import React from 'react';
import Image from 'next/image';

const ReasonsSection = () => {
    return (
        <section className={"container flex flex-col py-16"}>
            <h3 className={"text-tstar-42 font-light"}>Reasons to Collaborate</h3>
            <div className={"w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-16"}>
                <div className={"flex flex-col gap-2 pt-4 border-t-[1px] border-[#E0E0E0]"}>
                    <div>
                        <Image
                            src={"/assets/icons/learning.svg"}
                            alt={"learning"}
                            width={64}
                            height={64}
                        />
                    </div>
                    <h5 className={"text-tstar-36 font-light"}>Ethical</h5>
                    <p className={"text-trebuchet-16 font-normal text-[var(--dark-grey)]"}>We maintain the confidentiality of our clients' data.
                        We uphold our integrity by practicing zero-tolerance policy for bribery.</p>
                </div>
                <div className={"flex flex-col gap-2 pt-4 border-t-[1px] border-[#E0E0E0]"}>
                    <div>
                        <Image
                            src={"/assets/icons/skills.svg"}
                            alt={"skills"}
                            width={64}
                            height={64}
                        />
                    </div>
                    <h5 className={"text-tstar-36 font-light"}>Reliable</h5>
                    <p className={"text-trebuchet-16 font-normal text-[var(--dark-grey)]"}>We strive to provide solutions that are supported by data and technology.</p>
                </div>
                <div className={"flex flex-col gap-2 pt-4 border-t-[1px] border-[#E0E0E0]"}>
                    <div>
                        <Image
                            src={"/assets/icons/compassion.svg"}
                            alt={"compassion"}
                            width={64}
                            height={64}
                        />
                    </div>
                    <h5 className={"text-tstar-36 font-light"}>Agile</h5>
                    <p className={"text-trebuchet-16 font-normal text-[var(--dark-grey)]"}>We listen to our clients deliberately and deliver bespoke solutions to achieve excellent outcome.</p>
                </div>
            </div>
        </section>
    );
};

export default ReasonsSection;