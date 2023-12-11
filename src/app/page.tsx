import BenifitsSection from "@/components/landingpage/BenifitsSection";
import ContainerBox from "@/components/ui/ContainerBox";
import Footer from "@/components/landingpage/Footer";
import HeroSection from "@/components/landingpage/HeroSection";
import ServicesSection from "@/components/landingpage/ServicesSection";
import TestomonialSection from "@/components/landingpage/TestomonialSection";

export default function LandingPage() {
  return (
    <>
      <ContainerBox>
        <HeroSection />
        <ServicesSection />
        <BenifitsSection />
        <TestomonialSection />
      </ContainerBox>
    </>
  );
}
