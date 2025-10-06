import React from 'react';
import Image from "next/image";
import EmailInputArrow from "@/components/EmailInputArrow";

const Footer = () => {
    return (
        <footer className={"bg-[#2F2A2A] w-full relative"}>
            <div className={"container w-full flex flex-col gap-4 md:flex-row py-9"}>
                <div className={"flex w-full gap-4"}>
                    <div>
                        <Image
                            src={"/assets/images/2023-GPTW-Certification-1.png"}
                            alt={"2023-GPTW-Certification-1"}
                            width={35}
                            height={60}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/unwomen.png"}
                            alt={"unwomen"}
                            width={152}
                            height={50}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/iso-certification-1.png"}
                            alt={"iso-certification-1"}
                            width={206}
                            height={50}
                        />
                    </div>
                </div>
                <div className={"flex w-full gap-3"}>
                    <div>
                        <Image
                            src={"/assets/icons/ic_facebook.svg"}
                            alt={"facebook"}
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/icons/ic_instagram.svg"}
                            alt={"instagram"}
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/icons/ic_linkedin.svg"}
                            alt={"linkedin"}
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/icons/ic_youtube.svg"}
                            alt={"youtube"}
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/icons/ic_twitter.svg"}
                            alt={"twitter"}
                            width={32}
                            height={32}
                        />
                    </div>
                </div>
                <div className={"flex w-full flex-col gap-2"}>
                    <h6 className={"text-tstar-24 font-light text-white"}>Subscribe. Join the Community.</h6>
                    <EmailInputArrow/>
                </div>
            </div>
            <div className={"w-full h-[1px] bg-white/30"}/>
            <div className={"container py-6 w-full flex justify-between items-center text-white"}>
                <p className={"text-trebuchet-14 font-normal"}>Copyright © 2022 Daya Dimensi Indonesia. Website crafted
                    by Antikode.</p>
                <p className={"text-tstar-14 font-bold"}>Privacy Policy | Terms & Conditions</p>
            </div>
            <div className={"absolute bottom-[20%] right-[3%]"}>
                <Image
                    src={"/assets/images/whatsapp.png"}
                    alt={"twitter"}
                    width={72}
                    height={72}
                />
            </div>
        </footer>
    );
};

export default Footer;