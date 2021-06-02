import PropTypes from "prop-types";

const HeroSection = ({ children, opacityClass }) => {
  return (
    <main className="relative pt-16">
      <span
        className={`top-0 w-full h-full absolute z-20 overlay ${opacityClass}`}
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
