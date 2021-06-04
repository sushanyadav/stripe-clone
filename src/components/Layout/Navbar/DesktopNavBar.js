import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import DropDown, {
  ProductsDropdown,
  UseCasesDropdown,
  DevelopersDropdown,
  CompanyDropdown,
} from "./DropDown";

const NavItem = ({ name, DropDownComponent, wrapperAdditionalClassName }) => {
  const [itemHover, setItemHover] = useState(false);

  return (
    <div
      onMouseOver={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <li
        className={`p-5 font-semibold relative ${
          itemHover ? "text-gray-200" : "text-white"
        }`}
      >
        {itemHover && (
          <div
            style={{
              width: "0",
              height: "0",
              borderLeft: "0.6rem solid transparent",
              borderRight: "0.6em solid transparent",
              borderBottom: "0.6rem solid #fff",
              position: "absolute",
              margin: "auto",
              bottom: "0.1rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 5,
            }}
          ></div>
        )}
        <span className="cursor-default">{name}</span>
      </li>
      {itemHover && (
        <DropDown wrapperAdditionalClassName={wrapperAdditionalClassName}>
          <DropDownComponent />
        </DropDown>
      )}
    </div>
  );
};

const DesktopNavBar = () => {
  const router = useRouter();

  return (
    <ul className="hidden flex-grow md:flex justify-center text-md">
      <NavItem
        name="Products"
        DropDownComponent={ProductsDropdown}
        wrapperAdditionalClassName="w-11/12 lg:w-8/12"
      />
      <NavItem
        name="Use cases"
        wrapperAdditionalClassName="md:w-6/12 lg:w-4/12"
        DropDownComponent={UseCasesDropdown}
      />
      <NavItem
        name="Developers"
        wrapperAdditionalClassName="w-8/12 lg:w-6/12"
        DropDownComponent={DevelopersDropdown}
      />
      <NavItem
        name="Company"
        wrapperAdditionalClassName="md:w-8/12 lg:w-5/12"
        DropDownComponent={CompanyDropdown}
      />
      <li
        className={` p-5 font-semibold ${
          router.pathname === "/pricing" ? "active-link" : ""
        } `}
      >
        <Link href="#">Pricing</Link>
      </li>
    </ul>
  );
};

export default DesktopNavBar;
