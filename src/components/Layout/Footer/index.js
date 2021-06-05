import DashedLines from "components/DashedLines";
import StripeLines from "components/Layout/Footer/StripeLines";
import FooterNavItems from "components/Layout/Footer/FooterNavItems";

export default function Footer() {
  return (
    <>
      <footer
        className="overflow-hidden -mt-20 mx-auto"
        style={{ maxWidth: "4280px" }}
      >
        <StripeLines />
        <div
          className="bg-light-gray"
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
              <FooterNavItems />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
