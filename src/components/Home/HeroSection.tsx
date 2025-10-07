import { ArrowLink } from "@/components/ArrowLink"
import Image from "next/image"

const HeroSection = () => {
    const stats = [
        { value: "24+ Years", label: "Experience" },
        { value: "50.000+", label: "Executive Clients" },
        { value: "400+", label: "Organization Clients" },
    ]

    return (
        <section
            className="relative flex min-h-screen flex-col justify-end bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/assets/images/home-hero.png')" }}
        >
            <div className="container px-6 py-20 sm:px-10 md:px-16 lg:px-20">
                <div className="max-w-xl space-y-4">
                    <h1 className="text-tstar-52 leading-tight md:text-tstar-52">
                        Adopt Globally, <br />
                        Adapt Locally
                    </h1>

                    <p className="text-trebuchet-16 md:text-trebuchet-16 text-white">
                        Daya Dimensi Indonesia is a world-class strategic partner for individual and organisational transformation through humanity-based and technology-supported solutions to help you hire, promote, and develop exceptional leaders.
                    </p>

                    <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
                        <ArrowLink href="#" text="LEARN MORE ABOUT US" variant="white" />
                        <ArrowLink href="#" text="CONTACT US" variant="white" />
                    </div>
                </div>
            </div>

            <div className={"w-full flex"}>
                <div className={"bg-white flex-grow"}>
                </div>
                <div className={"relative w-full md:max-w-[1250px] flex flex-col-reverse md:flex-row"}>
                    <div className={"rotate-90 absolute hidden md:block -left-[102px] top-[52px] "}>
                        <ArrowLink href="#" text="Discover" variant="lightGrey"/>
                    </div>
                    <div className={"grid w-full grid-cols-1 gap-8 bg-white px-6 py-6 md:w-[58%] md:grid-cols-3 md:gap-4 md:py-6"}>
                        {stats.map((d, i) => (
                            <div className={"flex flex-col"} key={i}>
                                <h2 className={"text-tstar-36 font-light text-brand-light-red"}>
                                    {d.value}
                                </h2>
                                <p className={"text-trebuchet-16 text-black/40"}>{d.label}</p>
                            </div>
                        ))}
                    </div>
                    <div
                        className={"flex w-full items-center justify-center gap-4 bg-gradient-to-t from-black to-transparent px-6 py-8 md:w-[42%] md:justify-end md:py-0"}>
                        <div>
                            <Image
                                src={"/assets/images/unwomen.png"}
                                alt={"unwomen"}
                                width={195}
                                height={64}
                            />
                        </div>
                        <div>
                            <Image
                                src={"/assets/images/iso-certification-1.png"}
                                alt={"iso certification"}
                                width={260}
                                height={64}
                            />
                        </div>
                    </div>
                </div>
                <div className={"bg-gradient-to-t from-black to-transparent flex-grow"}>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
