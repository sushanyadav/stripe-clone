import PropTypes from "prop-types";

const HeroSection = ({ children, opacityClass }) => {
  return (
    <main className="relative pt-16">
      <span
        className={`inset-0 w-full h-full absolute mx-auto z-20 overlay ${opacityClass}`}
        style={{ maxWidth: "3280px" }}
      ></span>

      {children}
    </main>
  );
};

HeroSection.defaultProps = {};

HeroSection.propTypes = {
  opacityClass: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default HeroSection;
