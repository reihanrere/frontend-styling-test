import React from "react"
import Image from "next/image"
import BubbleBackground from "@/components/Home/BubbleBackground"
import ArrowChevron from "@/components/ArrowChevron"

const QuoteSection = () => {
    return (
        <section
            className="relative w-full flex justify-center items-center min-h-[600px] mt-32
                 bg-[linear-gradient(to_bottom,_var(--background-grey)_0%,_var(--background-grey)_50%,_white_50%,_white_100%)]"
        >
            <div className="absolute inset-0 flex">
                <div className="w-0 lg:w-[30%] bg-transparent" />
                <div className="relative w-full lg:w-[70%] bg-[var(--light-red)] overflow-hidden">
                    <BubbleBackground className="absolute top-[-20%] right-[20%] w-[70%] h-full opacity-25" />
                    <BubbleBackground className="absolute bottom-[-35%] right-[-5%] w-[90%] h-full opacity-30" />
                    <BubbleBackground className="absolute bottom-[-35%] left-[-5%] w-[90%] h-full opacity-30" />
                </div>
            </div>

            <div className="relative z-10 container h-full flex flex-col lg:flex-row justify-center items-center gap-12 text-white py-12">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/assets/images/qoute-kemenbudristek.png"
                        alt="qoute-kemenbudristek"
                        height={438}
                        width={584}
                        className="max-w-full h-auto object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
                    <div>
                        <Image
                            src="/assets/images/kemenbudristek.png"
                            alt="kemdikbud"
                            height={98}
                            width={71}
                            className="mx-auto lg:mx-0"
                        />
                    </div>

                    <h4 className="text-tstar-28 font-normal leading-snug">
                        “Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful
                        untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan
                        secara berkelanjutan.”
                    </h4>

                    <p className="text-tstar-18 font-normal">
                        Kementerian Pendidikan, Budaya, Riset, dan Teknologi
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-full flex h-[2px]">
                            <div className="w-[20%] h-full bg-white" />
                            <div className="w-[80%] h-full bg-white/40" />
                        </div>

                        <div className="flex gap-4">
                            <ArrowChevron type="left" />
                            <ArrowChevron type="right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuoteSection
