const LanguageList = ({ setSelectedLanguage, setShowLanguage }) => {
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

  const langClickHandler = (lang) => {
    setShowLanguage(false);
    setSelectedLanguage(lang);
  };

  return (
    <div className="bg-white absolute -bottom-2 sm:bottom-5 lg:-bottom-4 xl:bottom-1 2xl:bottom-0 left-10 right-4 p-8 max-w-xs rounded-lg shadow-xl">
      <div className="relative">
        <ul className="space-y-3">
          {languages.map((lang) => (
            <li
              key={lang}
              className="cursor-pointer"
              onClick={() => langClickHandler(lang)}
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
            bottom: "-2.5rem",
            left: "0",
            zIndex: 5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LanguageList;
