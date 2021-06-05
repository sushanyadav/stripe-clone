import DashedLines from "components/DashedLines";

import Link from "next/link";

const ScaleSection = () => {
  return (
    <div
      className="overflow-hidden mx-auto relative"
      style={{ maxWidth: "4280px" }}
    >
      <div
        className="relative z-10 h-10 sm:h-16 w-full"
        style={{
          transform: "skewY(-6deg)",
          transformOrigin: "100% 0",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full flex flex-col items-center"
          style={{ width: "18.5%", minWidth: "8rem" }}
        >
          <div
            style={{ backgroundColor: "#80e9ff" }}
            className=" h-full w-1/2 -mb-2 opacity-80"
          ></div>

          <div
            style={{ backgroundColor: "#0048e5" }}
            className="h-full w-full opacity-70"
          ></div>
        </div>
      </div>
      <div
        className="bg-dark relative z-20 flex items-center justify-center"
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
          <div className="relative pt-28 md:pt-40 pb-10 md:pb-14 2xl:pb-24 3xl:pb-36">
            <DashedLines opacity="opacity-5" />
            <div className=" px-2 sm:px-4 text-gray-50 py-20">
              <div className="mb-16 sm:mb-0 sm:mr-4">
                <h2 className="text-lg  text-accent mb-8 font-semibold">
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
                    <a className="text-accent font-medium hover:text-gray-900">
                      startups to Fortune 500s
                    </a>
                  </Link>
                  .
                </p>
                <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16">
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 absolute border-l h-full border-accent"></span>
                      250M+
                    </h2>
                    <p className="mt-2 text-gray-400">
                      API requests per day, peaking at 13,000 requests a second.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 md:-left-6 lg:-left-5 absolute border-l h-full border-accent"></span>
                      90%
                    </h2>
                    <p className="mt-2 text-gray-400">
                      of U.S adults have bought from business using stripe.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 lg:-left-6 absolute border-l h-full border-accent"></span>
                      135+
                    </h2>
                    <p className="mt-2 text-gray-400">
                      currencies and payment methods supported.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl relative">
                      <span className="top-0 -left-2 sm:-left-4 md:-left-6 lg:-left-7 absolute border-l h-full border-accent"></span>
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
