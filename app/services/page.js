import ProcessSection from "@/components/services/ProcessSection";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import StrongCTA from "@/components/services/StrongCTA";
import TestimonialsSection from "@/components/services/TestimonialsSection";
import WhyChooseUs from "@/components/services/WhyChooseUs";



export default function Services() {
  return (
   <>
   <ServicesHeroSection />
   <ServicesSection />
   <WhyChooseUs />
   <ProcessSection />
   <TestimonialsSection />
   <StrongCTA />
   
   </>
  );
}
