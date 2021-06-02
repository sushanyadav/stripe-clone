import HomeHeroSection from "components/HeroSection/HomeHeroSection";
import LogoSection from "components/LogoSection";
import PaymentSection from "components/PaymentSection";
import DevelopersSection from "components/DevelopersSection";
import WhyStripeSection from "components/WhyStripeSection";
import ScaleSection from "components/ScaleSection";
import GetStartedSection from "components/GetStartedSection";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <LogoSection />
      <PaymentSection />
      <DevelopersSection />
      <WhyStripeSection />
      <ScaleSection />
      <GetStartedSection />
    </>
  );
};

export default HomePage;
