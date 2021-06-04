import DashedLines from "components/DashedLines";

import Link from "next/link";

const ScaleSection = () => {
  return (
    <div className="overflow-y-hidden">
      <div
        className="bg-gray-900 relative z-20"
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
          <div className="relative pt-28 md:pt-40 pb-10 md:pb-14 ">
            <DashedLines opacity="opacity-10" />
            <div className=" px-2 sm:px-4 text-gray-50 py-20">
              <div className="mb-16 sm:mb-0 sm:mr-4">
                <h2 className="text-lg  text-blue-400 mb-8 font-semibold">
                  Global scale
                </h2>
                <h1 className="text-4xl w-full md:w-2/3 lg:w-1/3 font-semibold">
                  The backbone for internet business
                </h1>
                <p className="mt-8 text-gray-400 text-lg w-full md:w-3/5 lg:w-5/12">
                  For ambitious companies around the world, Stripe makes moving
                  money as simple, borderless and programmable as the rest of
                  the internet. Our teams are based in dozens of offices around
                  the world, and we process hundreds of billions of dollars each
                  year for{" "}
                  <Link href="#">
                    <a className="text-blue-400 hover:text-blue-600">
                      startups to Fortune 500s
                    </a>
                  </Link>
                  .
                </p>
                <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16">
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 absolute border-l h-full border-blue-600"></span>
                      250M+
                    </h2>
                    <p className="mt-2 text-gray-400">
                      API requests per day, peaking at 13,000 requests a second.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 md:-left-6 lg:-left-5 absolute border-l h-full border-blue-600"></span>
                      90%
                    </h2>
                    <p className="mt-2 text-gray-400">
                      of U.S adults have bought from business using stripe.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 lg:-left-6 absolute border-l h-full border-blue-600"></span>
                      135+
                    </h2>
                    <p className="mt-2 text-gray-400">
                      currencies and payment methods supported.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 md:-left-6 lg:-left-7 absolute border-l h-full border-blue-600"></span>
                      35+
                    </h2>
                    <p className="mt-2 text-gray-400">
                      countries with local acquiring, optimising acceptance
                      rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleSection;
