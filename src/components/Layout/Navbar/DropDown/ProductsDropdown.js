import { useState } from "react";

import {
  PaymentsIcon,
  TerminalIcon,
  ConnectIcon,
  BillingIcon,
  InvoicingIcon,
  CorporateCardIcon,
  CapitalIcon,
  IssuingIcon,
  TreasuryIcon,
  RadarIcon,
  SigmaIcon,
  AtlasIcon,
  ClimateIcon,
} from "utils/icons";

const SingleProductItem = ({ Icon, primaryText, secondaryText }) => {
  const [singleItemHovered, setSingleItemHovered] = useState(false);

  return (
    <li
      className="flex items-center gap-2 cursor-pointer group"
      onMouseOver={() => setSingleItemHovered(true)}
      onMouseLeave={() => setSingleItemHovered(false)}
    >
      <Icon />
      <h3 className="flex flex-col text-sm">
        <span className="flex items-center gap-1">
          {primaryText}
          {singleItemHovered && (
            <svg
              style={{ transform: "rotate(180deg)" }}
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 fill-current"
              x="0"
              y="0"
              enableBackground="new 0 0 550.354 550.354"
              version="1.1"
              viewBox="0 0 550.354 550.354"
              xmlSpace="preserve"
              height="9"
              width="9"
            >
              <path d="M541.169 208.807H261.295c-5.07 0-5.906-2.484-1.87-5.551l68.373-51.919c4.039-3.066 7.311-9.66 7.311-14.73V25.578c0-5.07-3.269-6.689-7.301-3.614L3.025 269.61c-4.033 3.075-4.033 8.057 0 11.132L327.811 528.39c4.033 3.076 7.301 1.457 7.301-3.613V413.748c0-5.07-3.274-11.665-7.311-14.73l-68.372-51.919c-4.04-3.066-3.201-5.551 1.87-5.551h279.876a9.18 9.18 0 009.18-9.181V217.988c-.006-5.071-4.116-9.181-9.186-9.181z"></path>
            </svg>
          )}
        </span>
        <span className="text-gray-500 group-hover:text-gray-800 font-normal text-xs">
          {secondaryText}
        </span>
      </h3>
    </li>
  );
};

const ProductItems = ({ primaryText, items }) => {
  return (
    <div>
      <h2 className="uppercase mb-6 lg:mb-8 text-gray-400 text-sm font-semibold">
        {primaryText}
      </h2>
      <ul className="space-y-8">
        {items.map(({ id, icon, secondaryText, primaryText }) => {
          return (
            <SingleProductItem
              key={id}
              Icon={icon}
              primaryText={primaryText}
              secondaryText={secondaryText}
            />
          );
        })}
      </ul>
    </div>
  );
};

const ProductsDropdown = () => {
  const paymentsList = [
    {
      id: "Payments1",
      icon: PaymentsIcon,
      primaryText: "Payments",
      secondaryText: "Online payments",
    },
    {
      id: "Payments2",
      icon: TerminalIcon,
      primaryText: "Terminal",
      secondaryText: "In-person payments",
    },
    {
      id: "Payments3",
      icon: ConnectIcon,
      primaryText: "Connect",
      secondaryText: "Payment for platforms",
    },
    {
      id: "Payments4",
      icon: BillingIcon,
      primaryText: "Billing",
      secondaryText: "Subscription management",
    },
    {
      id: "Payments5",
      icon: InvoicingIcon,
      primaryText: "Invoicing",
      secondaryText: "Online invoices",
    },
  ];

  const financialList = [
    {
      id: "Financial1",
      icon: CorporateCardIcon,
      primaryText: "Corporate Card",
      secondaryText: "Spend management",
    },
    {
      id: "Financial2",
      icon: CapitalIcon,
      primaryText: "Capital",
      secondaryText: "Business financing",
    },
    {
      id: "Financial3",
      icon: IssuingIcon,
      primaryText: "Issuing",
      secondaryText: "Card creation",
    },
    {
      id: "Financial4",
      icon: TreasuryIcon,
      primaryText: "Treasury",
      secondaryText: "Banking-as-a-service",
    },
  ];
  const businessList = [
    {
      id: "Business1",
      icon: RadarIcon,
      primaryText: "Radar",
      secondaryText: "Fraud & risk management",
    },
    {
      id: "Business2",
      icon: SigmaIcon,
      primaryText: "Sigma",
      secondaryText: "Custom reports",
    },
    {
      id: "Business3",
      icon: AtlasIcon,
      primaryText: "Atlas",
      secondaryText: "Startup incorporation",
    },
    {
      id: "Business4",
      icon: ClimateIcon,
      primaryText: "Climate",
      secondaryText: "Carbon removal",
    },
  ];

  return (
    <div className="grid grid-cols-3 w-full gap-8 text-gray-900">
      <ProductItems primaryText="Payments" items={paymentsList} />
      <ProductItems primaryText="financial services" items={financialList} />
      <ProductItems primaryText="business operations" items={businessList} />
    </div>
  );
};

export default ProductsDropdown;
