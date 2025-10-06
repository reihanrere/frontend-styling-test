import React from 'react';
import ExpertiseCard from "@/components/Home/ExpertiseCard";
import LearningIcon from "@/components/Icons/LearningIcon";
import DiagnosticIcon from "@/components/Icons/DiagnosticIcon";
import TransformationIcon from "@/components/Icons/TransformationIcon";
import KlobilityIcon from "@/components/Icons/KlobilityIcon";
import ExecutiveIcon from "@/components/Icons/ExecutiveIcon";

const ExpertiseSection = () => {
    const expertiseComponent = [
        {
            title: "Applied Science & Imagination Centre",
            href: "#",
            withBackgroundImage: false,
            icon: <LearningIcon/>
        },
        {
            title: "Diagnostics and Assessments",
            href: "#",
            withBackgroundImage: true,
            icon: <DiagnosticIcon/>
        },
        {
            title: "Human Resources & Organizational Transformation",
            href: "#",
            withBackgroundImage: false,
            icon: <TransformationIcon/>
        },
        {
            title: "Klobility",
            href: "#",
            withBackgroundImage: false,
            icon: <KlobilityIcon/>
        },
        {
            title: "Leadership Development",
            href: "#",
            withBackgroundImage: false,
            icon: <ExecutiveIcon/>
        },
        {
            title: "On-Demand Online Learning",
            href: "#",
            withBackgroundImage: false,
            icon: <LearningIcon/>
        },
    ]

    return (
        <section className={"bg-[var(--background-grey)] pt-8 md:pt-24"}>
            <div className={"container"}>
                <div className={"max-w-[700px]"}>
                    <h1 className={"text-tstar-42 text-black font-light"}>Expertise</h1>
                    <p className={"text-trebuchet-16 text-regular"}>
                        "Organisations who will succeed in the long-run are those who are open to new ideas, embrace innovations, instill compassion in every act and decision, and consistent in advancing humanity
                        through sustainability." - Excerpts from 'Leaders of a New Planet' book.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 md:mt-16">
                    {expertiseComponent.map((d, i) => (
                        <ExpertiseCard
                            key={i}
                            title={d.title}
                            icon={d.icon}
                            href={d.href}
                            withBackgroundImage={d.withBackgroundImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;