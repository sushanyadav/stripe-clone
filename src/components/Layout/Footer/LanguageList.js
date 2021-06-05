const LanguageList = ({
  styles,
  attributes,
  setPopperElement,
  handleCurrentLanguage,
}) => {
  const languages = [
    "Deutsch",
    "English (United States)",
    "English (United Kingdom)",
    "Español (América Latina)",
    "Español (España)",
    "Français (France)",
    "Français (Canada)",
    "Bahasa Indonesia",
    "Italiano",
    "日本語",
    "Português (Brasil)",
    "Nederlands",
    "ไทย",
    "简体中文",
  ];

  return (
    <div
      ref={setPopperElement}
      style={{ ...styles.popper, bottom: "0.3rem" }}
      {...attributes.popper}
      className="z-50  w-64"
    >
      <div className="bg-white px-8 py-4 rounded-lg shadow-2xl border-gray-200 border">
        <div className="relative">
          <ul className="space-y-3">
            {languages.map((lang) => (
              <li
                key={lang}
                className="cursor-pointer hover:opacity-60"
                onClick={() => handleCurrentLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
          <div
            style={{
              width: "0",
              height: "0",
              borderLeft: "0.6rem solid transparent",
              borderRight: "0.6em solid transparent",
              borderTop: "0.6rem solid #fff",
              position: "absolute",
              bottom: "-1.5rem",
              left: "-1rem",
              zIndex: 5,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LanguageList;
