import Button from "components/Button";
import DashedLines from "components/DashedLines";

import { ToolsIcon, PrebuiltIcon } from "utils/icons";
import Code from "./Code";

const index = () => {
  const clientCodeString = `const stripe = require('stripe')('sk_test_BQokikJOvBi2Hl4olfQ2');

await stripe.paymentIntents.create({
amount: 2000,
currency: 'usd'
});






`;

  const serverCodeString = `$node server.js && stripe listen
> Ready! Waiting for requests...
2021-05-01 17:17:52 [200] payment_intent.created
2021-05-01 17:17:52 [200] charge.succeeded
2021-05-01 17:17:52 [200] payment_intent.succeeded






`;

  return (
    <div className="relative">
      <div className="bg-gray-900 -mt-28 sm:-mt-72 relative z-20 developer-section-wrapper">
        <div className="container">
          <div className="relative py-36 lg:py-72">
            <DashedLines darkerBorderlines />
            <div className="grid sm:grid-cols-2 px-2 sm:px-4 text-gray-50 py-20">
              <div className="mb-16 sm:mb-0 sm:mr-4">
                <h2 className="text-lg  text-blue-400 mb-8 font-semibold">
                  Designed for developers
                </h2>
                <h1 className="text-4xl w-full sm:w-11/12 font-semibold">
                  The world’s most powerful and easy-to-use APIs
                </h1>
                <p className="mt-8 text-gray-400 text-lg w-full sm:w-10/12">
                  We agonise over the right abstractions so your teams don’t
                  need to stitch together disparate systems or spend months
                  integrating payments functionality.
                </p>
                <div className="flex mt-6">
                  <Button
                    backgroundClass="bg-blue-300"
                    classNames="text-gray-900"
                    hoverBackgroundClass="hover:bg-gray-50"
                    text="Read the docs"
                  />
                </div>
                <div className="flex items-center flex-col lg:flex-row gap-2 mt-8 lg:mt-10">
                  <div>
                    <ToolsIcon />
                    <h3 className="-ml-2 sm:-ml-4 pl-4 border-l border-blue-500">
                      Tools for every stack
                    </h3>
                    <p className="text-gray-400 mt-4 mb-2 w-full sm:w-10/12">
                      We offer client and server libraries in everything from
                      React and PHP to .NET and iOS.
                    </p>
                    <Button
                      text="See libraries"
                      classNames="text-blue-400 py-2 hover:text-gray-50"
                      noPadding
                    />
                  </div>
                  <div>
                    <PrebuiltIcon />
                    <h3 className="-ml-2 sm:-ml-4 pl-4 border-l border-blue-500">
                      Prebuilt integrations
                    </h3>
                    <p className="text-gray-400 mt-4 mb-2 w-full sm:w-11/12">
                      Use integrations for systems like Shopify, WooCommerce,
                      NetSuite, and more.
                    </p>
                    <Button
                      text="Explore partners"
                      classNames="text-blue-400 py-2 hover:text-gray-50"
                      noPadding
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-scroll">
                <Code codeString={clientCodeString} topRounded />
                <Code codeString={serverCodeString} hasHeading dark />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 md:bottom-14 lg:bottom-48 right-0 flex flex-col items-center">
        <div className="primary-stripe-line h-24 opacity-80 " />
        <div className=" relative z-10 secondary-stripe-line h-10 md:h-16 -mt-9 md:-mt-12 lg:-mt-14 opacity-60" />
      </div>
    </div>
  );
};

export default index;
