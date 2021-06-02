import Button from "components/Button";
import DashedLines from "components/DashedLines";

import { KnowWhatYouPayIcon, StartIntegrationIcon } from "utils/icons";

const GetStartedSection = () => {
  return (
    <div className="container">
      <div className="relative py-16 lg:py-20 items-start">
        <DashedLines />
        <div className="relative z-50 px-2 sm:px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-10  pb-12 gap-6">
            <div className="md:col-span-2">
              <h1 className="text-2xl w-full sm:w-4/6 font-bold text-gray-800">
                Ready to get started?
              </h1>
              <p className="mt-4 mb-8 lg:mb-4 text-lg lg:w-4/5 w-full">
                Explore Stripe Payments, or create an account instantly and
                start accepting payments. You can also contact us to design a
                custom package for your business.
              </p>
              <div className="flex items-center ">
                <Button
                  backgroundClass="bg-purple-600"
                  hoverBackgroundClass="hover:bg-gray-900"
                  text="Start now"
                />
                <Button
                  text="Contact sales"
                  classNames="text-purple-800 hover:text-gray-900"
                />
              </div>
            </div>
            <div className="-mt-0 sm:-mt-8">
              <KnowWhatYouPayIcon />
              <h2 className="font-semibold mb-2 sm:mb-4 -mt-4">
                Always know what you pay
              </h2>
              <p className="text-gray-700 mb-2 sm:mb-4 w-full xl:w-4/5 ">
                Integrated per-transaction pricing with no hidden fees.
              </p>
              <Button
                text="Pricing details"
                classNames="text-purple-600 py-2 hover:text-gray-900"
                noPadding
              />
            </div>
            <div className="-mt-0 sm:-mt-8">
              <StartIntegrationIcon />
              <h2 className="font-semibold mb-2 sm:mb-4 -mt-4">
                Start your integration
              </h2>
              <p className="text-gray-700 mb-2 sm:mb-4 w-full xl:w-11/12">
                Get up and running with Stripe in as little as 10 minutes.
              </p>
              <Button
                text="Pricing details"
                classNames="text-purple-600 py-2 hover:text-gray-900"
                noPadding
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
