import React from 'react'
import { ArrowLink } from '@/components/ArrowLink'

const JoinUsSection = () => {
    return (
        <section
            className="relative w-full h-[600px] flex flex-col justify-end text-white bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/work-ddi.png')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="container relative z-10 h-full flex flex-col justify-center items-start">
                <div className="max-w-[481px] flex flex-col items-start gap-2">
                    <h2 className="text-tstar-42 font-light leading-tight">
                        Be a Part of <br /> Daya Dimensi Indonesia
                    </h2>
                    <p className="text-trebuchet-16 text-white/90">
                        Are you the resilient leaders we are searching for? <br />
                        Join Daya Dimensi Indonesia to advance your leadership skill <br />
                        and generate exceptional leaders across Indonesia at once.
                    </p>

                    <ArrowLink
                        href="#"
                        className="mt-7"
                        text="LEARN MORE"
                        variant="white"
                    />
                </div>
            </div>
        </section>
    )
}

export default JoinUsSection
