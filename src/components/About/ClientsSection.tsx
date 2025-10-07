import React from 'react';
import Image from 'next/image';

const ClientsSection = () => {
    return (
        <section className={"w-full bg-[var(--dark-grey-2)] py-16"}>
            <div className={"container flex flex-col"}>
                <h3 className={"text-tstar-42 font-light text-white"}>Our Clients</h3>
                <div className={"w-full grid grid-cols-2 md:grid-cols-6 sm:grid-cols-4 gap-4"}>
                    <div>
                        <Image
                            src={"/assets/images/astrainternational.png"}
                            alt={"astrainternational"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/blibli.png"}
                            alt={"blibli"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/bri.png"}
                            alt={"bri"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/ifg.png"}
                            alt={"ifg"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/kalbefarma.png"}
                            alt={"kalbefarma"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/kemdikbud.png"}
                            alt={"kemdikbud"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/mandiri.png"}
                            alt={"mandiri"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/mindid.png"}
                            alt={"mindid"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/pertamina.png"}
                            alt={"pertamina"}
                            width={150}
                            height={21}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/pln.png"}
                            alt={"pln"}
                            width={150}
                            height={21}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;