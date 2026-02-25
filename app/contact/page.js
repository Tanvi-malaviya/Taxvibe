"use client";

import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactForm from "@/components/contact/Contactform";
import ContactHero from "@/components/contact/ContactHero";
import MiniContactCTA from "@/components/contact/MiniContactCTA";



export default function ContactPage() {
  return (
   <>
    <ContactHero />
   <ContactForm />
   <ContactFAQ />
   <MiniContactCTA />
   </>
  );
}