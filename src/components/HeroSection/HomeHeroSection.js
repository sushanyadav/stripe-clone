import HeroSection from "components/HeroSection";
import Button from "components/Button";
import DashedLines from "components/DashedLines";

const HomeHeroSection = () => {
  return (
    <HeroSection opacityClass="opacity-60">
      <div className="mt-14 outer-container">
        <div className="container">
          <div className="relative ">
            <DashedLines />
            <div className="flex">
              <div className="px-2 sm:px-4 heading">
                <div className="flex items-center">
                  <Button
                    backgroundClass="bg-gray-500"
                    text="Register now • Sessions, our virtual conference, starts on
                  16th June"
                    classNames="relative z-20 bg-opacity-20 text-sm mb-8 hover:text-gray-200"
                  />
                </div>

                <h1 className="heading-primary font-bold">
                  Payments infrastructure for the internet
                </h1>
                <p className="mt-8 text-lg text-gray-700 heading-secondary">
                  Millions of businesses of all sizes – from startups to Fortune
                  500s – use Stripe's software and APIs to accept payments, send
                  payouts, and manage their businesses online.
                </p>

                <div className="flex items-center mt-8 ">
                  <Button
                    backgroundClass="bg-gray-800"
                    hoverBackgroundClass="hover:bg-gray-600"
                    text="Start now"
                  />
                  <Button text="Contact sales" classNames="text-gray-800" />
                </div>
              </div>

              <img
                style={{ width: "30rem" }}
                src="/images/phone-img.png"
                alt="hero-image"
                className="relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default HomeHeroSection;