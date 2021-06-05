import Button from "components/Button";

const CountriesList = ({
  handleCurrentCountry,
  setPopperElement,
  attributes,
  styles,
  currentCountry,
}) => {
  const countries = [
    { pos: "-196px -10px", name: "Australia" },
    { pos: "-165px -10px", name: "Austria" },
    { pos: "-227px -10px", name: "Belgium" },
    { pos: "-351px -10px", name: "Brazil" },
    { pos: "-289px -10px", name: "Bulgaria" },
    { pos: "-382px -10px", name: "Canada" },
    { pos: "-134px -35px", name: "Cyprus" },
    { pos: "-165px -35px", name: "Czech Republic" },
    { pos: "-258px -35px", name: "Denmark" },
    { pos: "-382px -35px", name: "Estonia" },
    { pos: "-506px -35px", name: "Finland" },
    { pos: "-41px -60px", name: "France" },
    { pos: "-196px -35px", name: "Germany" },
    { pos: "-227px -60px", name: "Greece" },
    { pos: "-320px -60px", name: "Hong Kong" },
    { pos: "-444px -60px", name: "Hungary" },
    { pos: "-72px -85px", name: "India" },
    { pos: "-506px -60px", name: "Ireland" },
    { pos: "-196px -85px", name: "Italy" },
    { pos: "-320px -85px", name: "Japan" },
    { pos: "-227px -110px", name: "Latvia" },
    { pos: "-165px -110px", name: "Lithuania" },
    { pos: "-196px -110px", name: "Luxembourg" },
    { pos: "-475px -110px", name: "Malaysia" },
    { pos: "-413px -110px", name: "Malta" },
    { pos: "-444px -110px", name: "Mexico" },
    { pos: "-103px -135px", name: "Netherlands" },
    { pos: "-165px -135px", name: "New Zealand" },
    { pos: "-134px -135px", name: "Norway" },
    { pos: "-382px -135px", name: "Poland" },
    { pos: "-475px -135px", name: "Portugal" },
    { pos: "-72px -160px", name: "Romania" },
    { pos: "-227px -160px", name: "Singapore" },
    { pos: "-289px -160px", name: "Slovakia" },
    { pos: "-258px -160px", name: "Slovenia" },
    { pos: "-444px -35px", name: "Spain" },
    { pos: "-196px -160px", name: "Sweden" },
    { pos: "-475px -10px", name: "Switzerland" },
    { pos: "-227px -185px", name: "United States" },
    { pos: "-103px -60px", name: "United Kingdom" },
    { pos: "-41px -10px", name: "United Arab Emirates" },
  ];

  return (
    <div
      ref={setPopperElement}
      style={{ ...styles.popper, bottom: "0.3rem" }}
      {...attributes.popper}
      className="z-50  w-10/12 sm:w-full max-w-lg"
    >
      <div className="bg-white p-8 rounded-t-lg shadow-2xl border-gray-50 border">
        <Button
          text="Sign up instantly"
          classNames="text-gray-700 py-2 hover:text-gray-900 mb-4"
          noPadding
        />
        <ul
          className="md:grid sm:block space-y-2 md:space-y-0 mb-2 md:mb-0 md:grid-cols-3 gap-3"
          style={{ columnCount: "2" }}
        >
          {countries.map(({ pos, name }) => {
            return (
              <li
                key={name}
                onClick={() => handleCurrentCountry(name)}
                className="flex gap-2 text-gray-800 hover:opacity-60 text-sm font-medium cursor-pointer"
              >
                {name === currentCountry ? (
                  <svg
                    width="16"
                    height="16"
                    className="fill-current text-gray-700 "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 00-.87-.04.61.61 0 00-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    ></path>
                  </svg>
                ) : (
                  <img
                    src="https://images.ctfassets.net/fzn2n1nzq965/2cIDq4hzAh3wJS4rJAORjE/20a1540aef32a25f1b78a3cd4e09dcb4/flagIcons.svg"
                    alt=""
                    loading="lazy"
                    className="mt-1
                    "
                    style={{
                      width: "21px",
                      height: "15px",
                      objectFit: "none",
                      objectPosition: pos,
                    }}
                  />
                )}

                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-gray-50 relative p-8 rounded-b-lg  shadow-xl">
        <Button
          text="Request a invite"
          classNames="text-gray-700 py-2 hover:text-gray-900"
          noPadding
        />
        <div
          style={{
            width: "0",
            height: "0",
            borderLeft: "0.6rem solid transparent",
            borderRight: "0.6em solid transparent",
            borderTop: "0.6rem solid rgba(249, 250, 251)",
            position: "absolute",
            bottom: "-0.5rem",
            left: "2rem",
            zIndex: 5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CountriesList;
