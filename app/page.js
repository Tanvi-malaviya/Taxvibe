import AboutSection from "@/components/home/AboutSection";
import AccountantHero from "@/components/home/AccountantHero";
import CEOMessageSection from "@/components/home/CEOMessageSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import StrongCTASection from "@/components/home/StrongCTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
   <>
   <AccountantHero />
   <AboutSection />
   <WhyChooseUs />
   <CEOMessageSection />
   <ProcessSection />
   <ServicesSection />
   <TestimonialsSection />
   <StrongCTASection />
   
   </>
  );
}
