import DashedLines from "components/DashedLines";

import Link from "next/link";

import useMediaQuery from "hooks/useMediaQuery";

import { Logo } from "utils/icons";
import randomIdGenerator from "utils/randomIdGenerator";

const NavItem = ({ title, items, additionalClassName }) => {
  const itemWithId = items.map((item) => {
    return {
      id: randomIdGenerator(),
      item,
    };
  });

  return (
    <section className={`${additionalClassName} mb-4 sm:mb-0`}>
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="text-gray-700">
        {itemWithId.map((item) => (
          <Link key={item.id} href="#">
            <a className="hover:text-gray-400">
              <li className="mb-1">{item.item}</li>
            </a>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default function Footer() {
  const isSmallDevice = useMediaQuery("(max-width: 640px)"); // sm ( <  mobile phones )

  const navItems = [
    [
      {
        title: "Products",
        items: [
          // { item: "Payments", link: "#" },
          "Payments",
          "Billing",
          "Connect",
          "Payouts",
          "Atlas",
          "Radar",
          "Issuing",
          "Terminal",
          "Corporate Card",
          "Capital",
          "Treasury",
          "Sigma",
          "Climate",
          "Pricing",
        ],
      },
    ],
    [
      {
        title: "Developers",
        items: ["Documentation", "API reference", "API status"],
      },
      {
        title: "Company",
        items: [
          "About",
          "Customers",
          "Enterprise",
          "Partners",
          "Jobs",
          "Blog",
          "Newsroom",
          "Register for sessions",
        ],
      },
    ],
    [
      {
        title: "Use cases",
        items: ["SaaS", "Platform", "Marketplaces", "Ecommerce"],
      },
      {
        title: "Resources",
        items: [
          "Support",
          "Contact",
          "Guides",
          "Privacy & terms",
          "Licenses",
          "COVID-19",
          "Sitemap",
          "Cookie settings",
        ],
      },
    ],
  ];

  return (
    <footer className="overflow-y-hidden -mt-20">
      <div
        className="relative z-10 flex items-center justify-between h-10 sm:h-16  w-full"
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
        <div
          className="absolute top-4 md:top-7 right-0 h-full flex flex-col items-center"
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
      <div
        className="bg-gray-50"
        style={{
          transform: "skewY(-6deg)",
          transformOrigin: "100% 0",
        }}
      >
        <div
          className="container"
          style={{
            transform: "skewY(6deg)",
            transformOrigin: "100% 0",
          }}
        >
          <div className="relative pt-32 sm:pt-48 lg:pt-56 pb-12 sm:pb-16 lg:pb-28">
            <DashedLines />
            <nav className=" px-2 sm:px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1 flex flex-col items-start justify-between">
                  <div>
                    <Logo dark className="-mt-4" />
                    <button className="flex items-center text-left -mt-2 mb-1">
                      <svg
                        width="16"
                        height="16"
                        className="mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#0A2540"
                          fillRule="evenodd"
                          d="M3.54 8.04h4.42v4.43c0 .57.76.75 1.01.24l4.96-9.93a.54.54 0 00-.72-.72L3.3 7.03c-.5.25-.33 1.01.24 1.01"
                        ></path>
                      </svg>
                      United States
                    </button>

                    <button className="flex items-center text-left">
                      <svg
                        width="16"
                        height="16"
                        className="mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#0A2540"
                          fillRule="evenodd"
                          d="M7.5 2C10.91 2 13 4.01 13 6.5c0 2.07-1.45 3.82-3.92 4.34L6.62 13.3a.66.66 0 01-1.12-.46v-2.1C3.29 10.12 2 8.45 2 6.5 2 4.01 4.09 2 7.5 2z"
                        ></path>
                      </svg>
                      English (United Kingdom)
                    </button>
                  </div>
                  <span>© Stripe</span>
                </div>

                {navItems.map((navItem) => {
                  let parentClassNames = "";
                  let childClassNames = "";

                  if (navItem[0].title === "Use cases") {
                    parentClassNames = "flex  gap-8 col-span-2";
                    childClassNames = "flex-1";
                  }

                  return (
                    <div
                      key={randomIdGenerator()}
                      className={`${isSmallDevice ? parentClassNames : ""}`}
                    >
                      {navItem.map(({ title, items }, index) => {
                        return (
                          <NavItem
                            key={randomIdGenerator()}
                            title={title}
                            items={items}
                            additionalClassName={`${
                              index !== 0 && !isSmallDevice ? "mt-4" : ""
                            } ${isSmallDevice ? childClassNames : ""}`}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
