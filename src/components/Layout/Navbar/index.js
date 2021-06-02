import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import DesktopNavBar from "components/Layout/Navbar/DesktopNavBar";
import MobileNavBar from "components/Layout/Navbar/MobileNavBar";
import Button from "components/Button";

import { Logo, CloseIcon, OpenIcon } from "utils/icons";

export const LogoRoute = ({ withoutRouter }) => {
  if (withoutRouter) {
    return <Logo />;
  }

  return (
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
  );
};

LogoRoute.defaultProps = {
  withoutRouter: false,
};

LogoRoute.propTypes = {
  withoutRouter: PropTypes.bool,
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="top-0 absolute z-30 w-full">
      <div className="container relative py-1 flex text-white justify-between items-center">
        <div
          className="uppercase pl-2  md:pl-0 lg:pl-4 text-gray-200 hover:text-gray-300 cursor-pointer flex-none"
          onClick={closeMenu}
        >
          <LogoRoute />
        </div>
        <DesktopNavBar />
        <div
          className="md:hidden cursor-pointer text-gray-200"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <CloseIcon /> : <OpenIcon />}
        </div>
        {openMenu && (
          <div className="w-11/12 mx-auto bg-indigo-900 px-4 py-2 absolute top-16 left-0 right-0 rounded-md sm:hidden text-sm">
            <MobileNavBar closeMenu={closeMenu} />
          </div>
        )}
        <div className="flex-none hidden md:block lg:pr-4">
          <Button
            backgroundClass="bg-gray-200"
            text="Sign in"
            classNames="relative z-20 bg-opacity-10 hover:bg-opacity-30 hover:text-gray-50 shadow-sm"
          />
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {};

Navbar.propTypes = {};
