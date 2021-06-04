import PropTypes from "prop-types";
import Link from "next/link";

import Button from "components/Button";

import {
  CloseIcon,
  PayoutsIcon,
  DocumentationIcon,
  SupportIcon,
  AboutStripeIcon,
  NewsroomIcon,
  PartnersIcon,
  RegisterSessionIcon,
  JobsIcon,
  EnterpriseIcon,
  BlogIcon,
  PricingIcon,
} from "utils/icons";

import {
  paymentsList,
  financialList,
  businessList,
} from "./DropDown/ProductsDropdown";
import { useCaseItems } from "./DropDown/UseCasesDropdown";
import SingleItem from "./DropDown/SingleItem";

const MobileNavBar = ({ closeMenu }) => {
  const payouts = [
    {
      id: "Payments6",
      icon: PayoutsIcon,
      primaryText: "Payouts",
    },
  ];

  const allProductsItem = [
    ...paymentsList,
    ...financialList,
    ...businessList,
    ...payouts,
  ];

  const additionalItems = [
    {
      id: "additionalItem1",
      icon: PricingIcon,
      primaryText: "Pricing",
      linkTo: "#",
    },
    {
      id: "additionalItem2",
      icon: JobsIcon,
      primaryText: "Jobs",
      linkTo: "#",
    },
    {
      id: "additionalItem3",
      icon: DocumentationIcon,
      primaryText: "Documentation",
      linkTo: "#",
    },
    {
      id: "additionalItem4",
      icon: RegisterSessionIcon,
      primaryText: "Sessions",
      linkTo: "#",
    },
    {
      id: "additionalItem5",
      icon: AboutStripeIcon,
      primaryText: "About Stripe",
      linkTo: "#",
    },
    {
      id: "additionalItem6",
      icon: PartnersIcon,
      primaryText: "Partners",
      linkTo: "#",
    },
    {
      id: "additionalItem7",
      icon: SupportIcon,
      primaryText: "Support",
      linkTo: "#",
    },
    {
      id: "additionalItem8",
      icon: EnterpriseIcon,
      primaryText: "Enterprise",
      linkTo: "#",
    },
    {
      id: "additionalItem8",
      icon: NewsroomIcon,
      primaryText: "Newsroom",
      linkTo: "#",
    },
    {
      id: "additionalItem9",
      icon: BlogIcon,
      primaryText: "Blog",
      linkTo: "#",
    },
  ];

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg">
        <div className="space-y-4">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="uppercase text-gray-400 text-sm font-semibold">
                products
              </h2>
              <div onClick={closeMenu}>
                <CloseIcon />
              </div>
            </div>
            <div className="grid grid-cols-2">
              {allProductsItem.map(({ id, icon, primaryText }, i) => {
                return (
                  <SingleItem
                    key={id}
                    wrapperAdditionalClass={
                      !(i >= allProductsItem.length - 2) && "mb-4"
                    }
                    Icon={icon}
                    primaryText={primaryText}
                  />
                );
              })}
            </div>
          </div>
          <div className="border-dashed border-t border-gray-300">
            <div className="p-6">
              <h2 className="uppercase text-gray-400 text-sm font-semibold mb-4">
                use cases
              </h2>
              <div className="grid grid-cols-2">
                {useCaseItems.map(({ id, Icon, primaryText }, i) => {
                  return (
                    <SingleItem
                      key={id}
                      wrapperAdditionalClass={
                        !(i >= useCaseItems.length - 2) && "mb-4"
                      }
                      Icon={Icon}
                      primaryText={primaryText}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="border-dashed border-t border-gray-300">
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3">
                {additionalItems.map(({ id, icon, primaryText }, i) => {
                  return (
                    <SingleItem
                      key={id}
                      wrapperAdditionalClass={
                        !(i >= additionalItems.length - 2) && "mb-4"
                      }
                      Icon={icon}
                      primaryText={primaryText}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-gray-50">
            <div className="flex items-center justify-center p-6">
              <Link href="#">
                <a>
                  <Button
                    backgroundClass="bg-indigo-600"
                    hoverBackgroundClass="hover:bg-gray-600"
                    text="Sign in"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MobileNavBar.defaultProps = {};

MobileNavBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default MobileNavBar;
