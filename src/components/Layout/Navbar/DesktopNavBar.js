import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import useMediaQuery from "hooks/useMediaQuery";

import DropDown from "./DropDown";
import ProductsDropdown from "./DropDown/ProductsDropdown";

const DropDownNavItem = ({
  name,
  DropDownComponent,
  trianglePosLeft,
  wrapperAdditionalClassName,
}) => {
  const [itemHover, setItemHover] = useState(false);

  return (
    <li
      className={` p-5 font-semibold ${
        itemHover ? "text-gray-200" : "text-white"
      }`}
      onMouseOver={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <span className="cursor-default">{name}</span>
      {itemHover && (
        <DropDown
          trianglePosLeft={trianglePosLeft}
          wrapperAdditionalClassName={wrapperAdditionalClassName}
        >
          <DropDownComponent />
        </DropDown>
      )}
    </li>
  );
};

const DesktopNavBar = () => {
  const router = useRouter();

  const isLargeDevice = useMediaQuery("(min-width: 1280px)"); // lg ( > tablet Pro )

  return (
    <ul className="hidden flex-grow md:flex justify-center text-md">
      <DropDownNavItem
        name="Products"
        DropDownComponent={ProductsDropdown}
        wrapperAdditionalClassName="w-11/12 lg:w-8/12"
        trianglePosLeft={isLargeDevice ? "8.5rem" : "6.5rem"}
      />
      <DropDownNavItem
        name="Use cases"
        trianglePosLeft={isLargeDevice ? "15.5rem" : "13.5rem"}
        wrapperAdditionalClassName="w-11/12 lg:w-8/12"
        DropDownComponent={ProductsDropdown}
      />
      <DropDownNavItem
        name="Developers"
        trianglePosLeft={isLargeDevice ? "22.5rem" : "20.5rem"}
        wrapperAdditionalClassName="w-11/12 lg:w-8/12"
        DropDownComponent={ProductsDropdown}
      />
      <DropDownNavItem
        name="Company"
        trianglePosLeft={isLargeDevice ? "30rem" : "28rem"}
        wrapperAdditionalClassName="w-11/12 lg:w-8/12"
        DropDownComponent={ProductsDropdown}
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
