import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <div className="flex-1 w-full">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
