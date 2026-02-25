import AboutFounderHero from "@/components/about/AboutFounderHero";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import CaseStudySection from "@/components/about/CaseStudySection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import HomeServicesShowcase from "@/components/about/HomeServicesShowcase";
import OurProcessSection from "@/components/about/OurProcessSection";
import StrategicCTASection from "@/components/about/StrategicCTASection";
import TrustStatsSection from "@/components/about/TrustStatsSection";



export default function About() {
  return (
   <>
    <AboutHeroSection />
    <AboutFounderHero />
    <HomeServicesShowcase />
    <TrustStatsSection />
    <CaseStudySection />
    <OurProcessSection />
    <CoreValuesSection />
    <StrategicCTASection />
   
   </>
  );
}
