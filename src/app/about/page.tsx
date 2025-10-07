import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/About/HeroSection";
import KeyNumberSection from "@/components/About/KeyNumberSection";
import ReasonsSection from "@/components/About/ReasonsSection";
import ClientsSection from "@/components/About/ClientsSection";
import ActionSection from "@/components/About/ActionSection";

const About = () => {
    return (
        <>
            <Navbar />
            <main className={"w-full flex-col bg-[var(--background-grey)]"}>
                <HeroSection />
                <KeyNumberSection />
                <ReasonsSection />
                <ClientsSection />
                <ActionSection />
            </main>
            <Footer />
        </>
    );
};

export default About;