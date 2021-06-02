import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const MobileNavBar = ({ closeMenu }) => {
  const router = useRouter();

  return (
    <ul className="uppercase font-semibold text-gray-200">
      <Link href="#">
        <li
          className={`${
            router.pathname == "#" ? "active-link" : ""
          } p-2 border-b border-blue-300`}
          onClick={closeMenu}
        >
          Remain to export content
        </li>
      </Link>
    </ul>
  );
};

MobileNavBar.defaultProps = {};

MobileNavBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default MobileNavBar;
