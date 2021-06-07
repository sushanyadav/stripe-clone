import Head from "next/head";

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
      <Head>
        <meta
          name="description"
          content="Online payment processing for internet businesses. Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes, including fraud prevention, and subscription management. Use Stripe’s payment platform to accept and process payments online for easy-to-use commerce solutions."
        ></meta>
        <title>
          Online payment processing for internet businesses – Stripe
        </title>
      </Head>
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
