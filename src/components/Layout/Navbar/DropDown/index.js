import ProductsDropdown from "./ProductsDropdown";
import DevelopersDropdown from "./DevelopersDropdown";
import UseCasesDropdown from "./UseCasesDropdown";
import CompanyDropdown from "./CompanyDropdown";

const DropDown = ({ children, wrapperAdditionalClassName }) => {
  return (
    <div
      className={`${wrapperAdditionalClassName} absolute top-16 z-50 mx-auto`}
      style={{
        transform: "translateX(-50%)",
        left: "50%",
      }}
    >
      {children}
    </div>
  );
};

export {
  ProductsDropdown,
  UseCasesDropdown,
  DevelopersDropdown,
  CompanyDropdown,
};

export default DropDown;
