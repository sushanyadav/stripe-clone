import { useState } from "react";

import LanguageList from "components/Layout/Footer/LanguageList";
import CountriesList from "components/Layout/Footer/CountriesList";
import DashedLines from "components/DashedLines";
import StripeLines from "components/Layout/Footer/StripeLines";
import FooterNavItems from "components/Layout/Footer/FooterNavItems";

import useOutsideAlerter from "hooks/useOutsideAlerter";

export default function Footer() {
  const [showCountries, setShowCountries] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedLanguage, setSelectedLanguage] = useState("Deutsch");

  const handleShowCountries = () => {
    setShowCountries(!showCountries);
  };

  const countriesDomNode = useOutsideAlerter(() => setShowCountries(false));
  const languageDomNode = useOutsideAlerter(() => setShowLanguage(false));

  return (
    <>
      <div
        ref={countriesDomNode}
        // className="relative -bottom-72 container z-50"
        className="relative container top-44 sm:top-72 lg:top-72 xl:top-80 z-50"
      >
        {showCountries && (
          <CountriesList
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        )}
      </div>
      <div
        ref={languageDomNode}
        // className="relative -bottom-72 container z-50"
        className="relative container top-44 sm:top-72 lg:top-72 xl:top-80 z-50"
      >
        {showLanguage && (
          <LanguageList
            setShowLanguage={setShowLanguage}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        )}
      </div>
      <footer className="overflow-y-hidden -mt-20">
        <StripeLines />
        <div
          className="bg-gray-50"
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
              <FooterNavItems
                countriesDomNode={countriesDomNode}
                languageDomNode={languageDomNode}
                handleShowCountries={handleShowCountries}
                setShowLanguage={setShowLanguage}
                showLanguage={showLanguage}
                setSelectedLanguage={setSelectedLanguage}
                selectedCountry={selectedCountry}
                selectedLanguage={selectedLanguage}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
