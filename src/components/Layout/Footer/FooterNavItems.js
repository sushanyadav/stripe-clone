import Link from "next/link";

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

const FooterNavItems = ({
  countriesDomNode,
  languageDomNode,
  handleShowCountries,
  setShowLanguage,
  selectedCountry,
  selectedLanguage,
}) => {
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
    <nav className=" px-2 sm:px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1 flex flex-col items-start justify-between">
          <div>
            <Link href="#">
              <a>
                <Logo dark className="-mt-4 hover:opacity-50 cursor-pointer" />
              </a>
            </Link>
            <button
              ref={countriesDomNode}
              onClick={handleShowCountries}
              className=" flex items-center hover:opacity-50 text-left focus:outline-none -mt-2 mb-1"
            >
              <svg width="16" height="16" className="mr-2" viewBox="0 0 16 16">
                <path
                  fill="#0A2540"
                  fillRule="evenodd"
                  d="M3.54 8.04h4.42v4.43c0 .57.76.75 1.01.24l4.96-9.93a.54.54 0 00-.72-.72L3.3 7.03c-.5.25-.33 1.01.24 1.01"
                ></path>
              </svg>
              {selectedCountry}
            </button>

            <button
              ref={languageDomNode}
              onClick={setShowLanguage}
              className="flex items-center hover:opacity-50 focus:outline-none text-left"
            >
              <svg width="16" height="16" className="mr-2" viewBox="0 0 16 16">
                <path
                  fill="#0A2540"
                  fillRule="evenodd"
                  d="M7.5 2C10.91 2 13 4.01 13 6.5c0 2.07-1.45 3.82-3.92 4.34L6.62 13.3a.66.66 0 01-1.12-.46v-2.1C3.29 10.12 2 8.45 2 6.5 2 4.01 4.09 2 7.5 2z"
                ></path>
              </svg>
              {selectedLanguage}
            </button>
          </div>
          <span className="mt-4 select-none">© Stripe</span>
        </div>

        {navItems.map((navItem) => {
          let parentClassNames = "";
          let childClassNames = "";

          if (navItem[0].title === "Use cases") {
            parentClassNames =
              "flex justify-between md:block gap-8 col-span-2 md:col-span-1";
            childClassNames = "flex-1";
          }

          return (
            <div key={randomIdGenerator()} className={parentClassNames}>
              {navItem.map(({ title, items }, index) => {
                return (
                  <NavItem
                    key={randomIdGenerator()}
                    title={title}
                    items={items}
                    additionalClassName={`${
                      index !== 0 ? "mt-0 sm:mt-4" : ""
                    } ${childClassNames}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default FooterNavItems;
