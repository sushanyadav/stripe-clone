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
    <>
      <div
        className="bg-gray-900 -mt-20 sm:-mt-64 relative z-20"
        style={{
          transform: "skewY(-6deg)",
          transformOrigin: "100% 0",
        }}
      >
        <div
          className="container "
          style={{
            transform: "skewY(6deg)",
            transformOrigin: "100% 0",
          }}
        >
          <div className="relative pb-20 pt-44 md:pb-24 md:pt-56 ">
            <DashedLines opacity="opacity-10" />

            <div className="grid sm:grid-cols-2 px-2 sm:px-4 text-gray-50">
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
      <div
        className="relative z-10 h-10 sm:h-16 w-full"
        style={{
          transform: "skewY(-6deg)",
          transformOrigin: "100% 0",
        }}
      >
        <div
          className="absolute top-0 right-0 h-full flex flex-col items-center"
          style={{ width: "18.5%", minWidth: "8rem" }}
        >
          <div
            style={{ backgroundColor: "#80e9ff" }}
            className="h-full w-full"
          ></div>

          <div
            style={{ backgroundColor: "#0048e5" }}
            className="h-full  w-1/2 -mt-2 opacity-60"
          ></div>
        </div>
      </div>
    </>
  );
};

export default index;
