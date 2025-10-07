import React from 'react';
import Image from "next/image";
import ArrowIcon from "@/components/Icons/ArrowIcon";

const HeroSection = () => {
    return (
        <section className="flex w-full flex-col-reverse md:flex-row">
            <div className="relative order-2 md:order-1 flex w-full flex-col bg-[var(--dark-grey-2)] p-8 text-white md:w-[40%] md:min-h-screen">
                <div className="absolute top-[20%] left-[calc(50%-150px)] opacity-20 hidden md:block">
                    <Image src={"/assets/images/diagonal.png"} alt="diagonal" width={300} height={300} />
                </div>
                <div className="absolute top-[40%] left-[calc(50%-250px)] opacity-20 hidden md:block">
                    <Image src={"/assets/images/diagonal.png"} alt="diagonal" width={350} height={350} />
                </div>

                <div className="pl-0 md:pl-19 pt-8 mt-10 z-10">
                    <span className="text-white/70">Home / </span>
                    <span className="text-white">About</span>
                </div>

                <div className="pl-0 md:pl-19 z-10 flex flex-grow flex-col justify-center py-10">
                    <p className="text-tstar-48 font-light mb-4">Force of Progress</p>
                    <p className="text-trebuchet-16 font-light leading-relaxed max-w-md">
                        Daya Dimensi Indonesia is a leadership consultant
                        that supports organisations develop and deliver
                        strategic programmes such as assessment centre,
                        selection, learning, and personal & organisational
                        transformation.
                    </p>
                </div>

                <div className="pl-0 md:pl-19 pb-8 flex justify-center md:justify-start z-10">
                    <ArrowIcon className="rotate-90" />
                </div>
            </div>

            <div
                className="order-1 md:order-2 w-full bg-cover bg-center min-h-[50vh] md:w-[60%]"
                style={{backgroundImage: `url("/assets/images/about-hero.png")`}}
            />
        </section>
    );
};

export default HeroSection;