import Link from "next/link";

import Button from "components/Button";
import DashedLines from "components/DashedLines";

const PaymentSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="outer-container">
        <div className="container">
          <div className="relative z-10 pt-20 sm:pt-32">
            <div className="px-2 sm:px-4">
              <DashedLines />

              <h2 className="text-xl  text-blue-600 mb-8 font-semibold">
                Unified platform
              </h2>
              <h1 className="text-4xl font-semibold sm:w-1/2">
                A fully integrated suite of payments products
              </h1>
              <div className="grid grid-col-1 sm:grid-cols-2 mt-8 text-lg gap-10 text-gray-600">
                <p>
                  We bring together everything that’s required to build websites
                  and apps that accept payments and send payouts globally.
                  Stripe’s products power payments for{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      online and in-person retailers
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      subscriptions businesses
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      software platforms and marketplaces
                    </a>
                  </Link>
                  , and everything in between.
                </p>

                <p>
                  We also help companies{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      beat fraud
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      send invoices
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      issue virtual and physical cards
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      get financing
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-900">
                      manage business spend
                    </a>
                  </Link>
                  , and much more.
                </p>
              </div>
            </div>

            <div className=" grid grid-cols-3">
              <div className="ml-3 flex col-span-2">
                <Button
                  backgroundClass="bg-blue-600"
                  hoverBackgroundClass="hover:bg-blue-900"
                  text="Start with payments"
                  classNames="mt-8 text-base"
                />
              </div>
              <div className="g-pay-image-wrapper row-span-2 ml-4 sm:ml-0">
                <img className="-mt-2 ml-4 2xl:ml-8" src="/images/g-pay.png" />
              </div>
              <div className="card-image-wrapper">
                <img
                  className="-ml-0 sm:-ml-6 md:-ml-7"
                  src="/images/card.png"
                />
              </div>
              <div className="invoice-image-wrapper">
                <img
                  className="-ml-0 sm:-ml-10 md:-ml-12 lg:-ml-10 xl:-ml-16"
                  src="/images/invoice.png"
                />
              </div>
              <div className="ipay-image-wrapper row-span-2">
                <img
                  className="-ml-4 sm:-ml-12 -mt-16 sm:-mt-48"
                  src="/images/ipay.png"
                />
              </div>
              <div className="dashboard-image-wrapper col-span-2">
                <img
                  className="-ml-0 sm:-ml-14 lg:-ml-20  -mt-8 md:-mt-20 lg:-mt-20"
                  src="/images/dashboard.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
