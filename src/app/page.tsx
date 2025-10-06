import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import ExpertiseSection from "@/components/Home/ExpertiseSection";
import QuoteSection from "@/components/Home/QuoteSection";
import UpcomingActivitiesSection from "@/components/Home/UpcomingActivitiesSection";

export default function Home() {
  return (
      <>
          <Navbar />
          <main className={"w-full flex-col bg-[var(--background-grey)]"}>
              <HeroSection />
              <ExpertiseSection />
              <QuoteSection />
              <UpcomingActivitiesSection />
          </main>
      </>
  );
}
