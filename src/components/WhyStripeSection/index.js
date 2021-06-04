import Link from "next/link";

import DashedLines from "components/DashedLines";

import {
  CloseToMetalIcon,
  ImprovingPlatformIcon,
  BattleTestedIcon,
  IntelligentOptimisationIcon,
} from "utils/icons";

const index = () => {
  return (
    <div className="-mt-20 lg:-mt-48">
      <div className="container">
        <div className="relative pt-36 lg:pt-60 pb-56 sm:pb-80 items-start">
          <DashedLines />
          <div className="px-2 sm:px-4">
            <div className="py-10">
              <h2 className="text-lg  text-blue-600 mb-8 font-semibold">
                Why Stripe
              </h2>
              <h1 className="text-4xl w-full sm:w-4/6 font-bold text-gray-800">
                A technology-first approach to payments and finance
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              <div>
                <CloseToMetalIcon />
                <h2 className="-mt-2 mb-4 font-semibold relative">
                  <span className="top-0 -left-2 md:-left-4 absolute border-l h-full border-blue-600"></span>
                  Close to the metal
                </h2>
                <p className="text-gray-600">
                  From{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-700">
                      direct integrations
                    </a>
                  </Link>{" "}
                  with card networks and banks to checkout flows in the browser,
                  we operate on and optimize at every level of the financial
                  stack.
                </p>
              </div>
              <div>
                <ImprovingPlatformIcon />
                <h2 className="relative -mt-2 mb-4 font-semibold">
                  <span className="top-0 -left-2 md:-left-4 absolute border-l h-full border-blue-600"></span>
                  Fastest-improving platform
                </h2>
                <p className="text-gray-600">
                  We release{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-700">
                      hundreds of features
                    </a>
                  </Link>{" "}
                  and improvements each year to help you stay ahead of industry
                  shifts. (On average, we deploy our production API 16x per
                  day.)
                </p>
              </div>
              <div>
                <BattleTestedIcon />
                <h2 className="relative -mt-2 mb-4 font-semibold">
                  <span className="top-0 -left-2 md:-left-4 absolute border-l h-full border-blue-600"></span>
                  Battle-tested reliability
                </h2>
                <p className="text-gray-600 w-full sm:w-11/12">
                  Our systems operate with{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-700">99.9%+</a>
                  </Link>{" "}
                  uptime and are highly scalable and redundant. Stripe is
                  certified to the highest compliance standards.
                </p>
              </div>
              <div>
                <IntelligentOptimisationIcon />
                <h2 className="relative -mt-2 mb-4 font-semibold">
                  <span className="top-0 -left-2 md:-left-3.5 lg:-left-3 absolute border-l h-full border-blue-600"></span>
                  Intelligent optimizations
                </h2>
                <p className="text-gray-600">
                  Our machine learning models train on{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-700">
                      billions
                    </a>
                  </Link>{" "}
                  of data points and help increase revenue across conversion,
                  fraud, revenue recovery, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
