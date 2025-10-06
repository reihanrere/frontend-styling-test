import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import ExpertiseSection from "@/components/Home/ExpertiseSection";

export default function Home() {
  return (
      <>
          <Navbar />
          <main className={"w-full flex-col"}>
              <HeroSection />
              <ExpertiseSection />
          </main>
      </>
  );
}
