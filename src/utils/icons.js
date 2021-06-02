export const Logo = ({ dark, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        dark ? "text-black" : "text-white"
      } fill-current  w-16 h-16 ${className}`}
      viewBox="0 0 60 25"
    >
      <path
        fillRule="evenodd"
        d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 01-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 013.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 01-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 01-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1 0-1.98-6.26-1.24-6.26-5.8C0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 00-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
      ></path>
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <>
      <span className="sr-only">Close menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </>
  );
};

export const OpenIcon = () => {
  return (
    <>
      <span className="sr-only">Open menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </>
  );
};

export const PaymentsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-payments-SiteMenu-a)"
        d="M34.61 11.28a2.56 2.56 0 00-1.22-1.04L8.54.2A2.57 2.57 0 005 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
      ></path>
      <path
        fill="#96F"
        d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 005 25v12.42a2.58 2.58 0 003.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
      ></path>
      <path
        fill="url(#product-icon-payments-SiteMenu-b)"
        d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-payments-SiteMenu-a"
          x1="20"
          x2="20"
          y1="4.13"
          y2="21.13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11EFE3"></stop>
          <stop offset="1" stopColor="#21CFE0"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-payments-SiteMenu-b"
          x1="35"
          x2="35"
          y1="11.28"
          y2="28.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0048E5"></stop>
          <stop offset="1" stopColor="#9B66FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TerminalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="#9B66FF"
        d="M36.98 14.05l-6.31 1.36L9.33 20l-7.35 1.58A2.52 2.52 0 000 24.05v13.42C0 38.87 1.12 40 2.5 40h35c1.38 0 2.5-1.13 2.5-2.53V16.53c0-.77-.34-1.49-.93-1.97a2.48 2.48 0 00-2.09-.5z"
      ></path>
      <path
        fill="url(#product-icon-terminal-SiteMenu-a)"
        d="M28.59 0H11.58A2.54 2.54 0 009 2.5v25c0 1.38 1.15 2.5 2.58 2.5h16.84A2.54 2.54 0 0031 27.5v-25A2.5 2.5 0 0028.59 0z"
      ></path>
      <path
        fill="url(#product-icon-terminal-SiteMenu-b)"
        d="M31 15.34V27.5c0 1.38-1.15 2.5-2.58 2.5H11.58A2.54 2.54 0 019 27.5v-7.43l.33-.07 21.34-4.59.33-.07z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-terminal-SiteMenu-a"
          x1="20"
          x2="20"
          y1="1.97"
          y2="17.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11EFE3"></stop>
          <stop offset="0.33" stopColor="#15E8E2"></stop>
          <stop offset="0.74" stopColor="#1FD3E0"></stop>
          <stop offset="1" stopColor="#21CFE0"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-terminal-SiteMenu-b"
          x1="31"
          x2="5.34"
          y1="22.67"
          y2="22.67"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0048E5"></stop>
          <stop offset="0.64" stopColor="#625AF5"></stop>
          <stop offset="1" stopColor="#8A62FC"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ConnectIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-connect-SiteMenu-a)"
        d="M12.47.01a13.01 13.01 0 00.5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 00-13.53-13z"
      ></path>
      <path
        fill="#0073E6"
        d="M27.53 39.99a13.01 13.01 0 00-.5-25.99H16.48A2.48 2.48 0 0014 16.48v10.51a12.99 12.99 0 0013.53 13z"
      ></path>
      <path
        fill="url(#product-icon-connect-SiteMenu-b)"
        d="M26 14v9.52A2.48 2.48 0 0123.52 26H14v-9.52A2.48 2.48 0 0116.32 14l.16-.01H26z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-connect-SiteMenu-a"
          x1="13"
          x2="13"
          y1="1.71"
          y2="15.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11EFE3"></stop>
          <stop offset="0.33" stopColor="#15E8E2"></stop>
          <stop offset="0.74" stopColor="#1FD3E0"></stop>
          <stop offset="1" stopColor="#21CFE0"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-connect-SiteMenu-b"
          x1="20"
          x2="20"
          y1="15.72"
          y2="27.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00299C"></stop>
          <stop offset="1" stopColor="#0073E6"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const BillingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-billing-SiteMenu-a)"
        d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 000 2.46v30.08a2.46 2.46 0 003.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z"
      ></path>
      <path
        fill="#00D924"
        d="M26.5 39a13.5 13.5 0 100-27 13.5 13.5 0 000 27z"
      ></path>
      <path
        fill="url(#product-icon-billing-SiteMenu-b)"
        d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0126 12z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-billing-SiteMenu-a"
          x1="13"
          x2="13"
          y1="6.35"
          y2="35.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD748"></stop>
          <stop offset="1" stopColor="#FFC148"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-billing-SiteMenu-b"
          x1="19.5"
          x2="19.5"
          y1="12.01"
          y2="30.19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A600"></stop>
          <stop offset="1" stopColor="#00D924"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const InvoicingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="#00D924"
        d="M12.5 1A2.5 2.5 0 0010 3.5v32.831a2.5 2.5 0 01-1.853 2.415l28-7.506A2.5 2.5 0 0038 28.825V3.5A2.5 2.5 0 0035.5 1h-23z"
      ></path>
      <path
        fill="url(#product-icon-invoicing-SiteMenu-a)"
        d="M1.253 24.548a2.5 2.5 0 00-.915 3.415l5.477 9.486a2.5 2.5 0 002.812 1.165l26.147-7.006-10.187-17.645a2.5 2.5 0 00-3.415-.915l-19.919 11.5z"
      ></path>
      <path
        fill="url(#product-icon-invoicing-SiteMenu-b)"
        d="M8.402 38.663c.075-.013.15-.03.225-.05l26.147-7.005-10.187-17.645a2.5 2.5 0 00-3.415-.915L10 19.498V36.33a2.5 2.5 0 01-1.598 2.332z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-invoicing-SiteMenu-a"
          x1="17.39"
          x2="17.389"
          y1="20.25"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD748"></stop>
          <stop offset="1" stopColor="#FFC148"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-invoicing-SiteMenu-b"
          x1="21.589"
          x2="21.588"
          y1="12.712"
          y2="38.663"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A600"></stop>
          <stop offset="1" stopColor="#00D924"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CorporateCardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <g clipPath="url(#product-icon-corporate-SiteMenu-card-a)">
        <path
          fill="url(#product-icon-corporate-SiteMenu-card-b)"
          d="M32.94 19.84l-.56-2.6-.12-.57-2.73-12.7a2.47 2.47 0 00-1.09-1.57 2.52 2.52 0 00-1.89-.34L2 7.22A2.5 2.5 0 00.4 8.3a2.46 2.46 0 00-.34 1.87l3.42 15.87a2.51 2.51 0 002.96 1.9l3.31-.68v-.54.55L31 22.8a2.5 2.5 0 001.6-1.07c.37-.56.49-1.24.34-1.89z"
        ></path>
        <path
          fill="#0073E6"
          d="M37.5 17h-25c-.66 0-1.3.27-1.77.75a2.62 2.62 0 00-.73 1.83v16.84A2.54 2.54 0 0012.5 39h25c1.38 0 2.5-1.15 2.5-2.58V19.58c0-.69-.26-1.34-.73-1.83A2.46 2.46 0 0037.5 17z"
        ></path>
        <path
          fill="url(#product-icon-corporate-SiteMenu-card-c)"
          d="M32.33 17l.05.23.56 2.61A2.5 2.5 0 0131 22.8l-21 4.42v-7.64c0-.62.21-1.21.6-1.68l.13-.15c.47-.48 1.1-.75 1.77-.75h19.83z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="product-icon-corporate-SiteMenu-card-b"
          x1="16.5"
          x2="16.5"
          y1="-0.25"
          y2="31.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#FF80FF"></stop>
          <stop offset="0.82" stopColor="#FF62DC"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-corporate-SiteMenu-card-c"
          x1="11.92"
          x2="11.92"
          y1="17"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00299C"></stop>
          <stop offset="1" stopColor="#0073E6"></stop>
        </linearGradient>
        <clipPath id="product-icon-corporate-SiteMenu-card-a">
          <path fill="#fff" d="M0 0h40v40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const CapitalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-capital-SiteMenu-a)"
        d="M23.95 14.05l-9.74 2.12-12.18 2.52A2.59 2.59 0 000 21.22v16.26A2.5 2.5 0 002.54 40H27V16.57a2.55 2.55 0 00-3.05-2.52z"
      ></path>
      <path
        fill="url(#product-icon-capital-SiteMenu-b)"
        d="M36.85.05l-21.82 4.6A2.57 2.57 0 0013 7.15V40h24.46c1.42-.2 2.54-1.3 2.54-2.7V2.55c0-1.6-1.52-2.8-3.15-2.5z"
      ></path>
      <path
        fill="url(#product-icon-capital-SiteMenu-c)"
        d="M23.95 14.05c1.63-.3 3.05.9 3.05 2.52V40H13V16.42l1.21-.25 9.74-2.12z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-capital-SiteMenu-a"
          x1="13.52"
          x2="13.52"
          y1="36.35"
          y2="18.21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D0E1"></stop>
          <stop offset="1" stopColor="#00F5E7"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-capital-SiteMenu-b"
          x1="26.46"
          x2="26.46"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D924"></stop>
          <stop offset="1" stopColor="#00D924"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-capital-SiteMenu-c"
          x1="19.93"
          x2="19.93"
          y1="40"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D722"></stop>
          <stop offset="0.85" stopColor="#00BD01"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const IssuingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-issuing-SiteMenu-a)"
        d="M7.62 26.48l-.02-.03a2.44 2.44 0 01-.7-1.48 2.49 2.49 0 01.11-1.05c.05-.28.13-.54.24-.77l.08-.17L14.67 10h21.85A2.52 2.52 0 0139 12.37l.01.16v22.92A2.52 2.52 0 0136.67 38l-.16.01H19a2.5 2.5 0 00.64-1.97c-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1v-.01l.14.1a2.52 2.52 0 01-.27-.21l-.03-.03z"
      ></path>
      <path
        fill="#0073E6"
        d="M22.05 2.1c.7-.15 1.41 0 1.99.41l6.56 4.72a2.5 2.5 0 01.92 2.8V10l-8.5 26-.05.2-.03.08-.03.09-.15.32-.02.04-.19.29-.03.04a2.9 2.9 0 01-.23.25l-.03.02a2.24 2.24 0 01-.58.4l-.03.03c-.1.05-.2.1-.31.13h-.05l-.33.08h-.05a2.3 2.3 0 01-.36.03H3.53A2.53 2.53 0 011 35.45v-22.9C1 11.14 2.13 10 3.53 10H16.6l3.8-6.7a2.5 2.5 0 011.46-1.15l.18-.05z"
      ></path>
      <path
        fill="url(#product-icon-issuing-SiteMenu-b)"
        d="M31.38 10l-8.37 26-.02.1-.02.1-.03.08-.03.09-.07.16-.08.16-.02.04-.1.15-.09.14-.03.04-.11.13-.12.12-.03.02c-.08.09-.17.16-.26.23l-.15.1-.17.08-.03.02-.15.07-.16.06h-.05l-.16.05-.1.01.1-.1c.4-.51.59-1.17.51-1.82-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1a2.54 2.54 0 01-.26-.26l-.04-.05a2.48 2.48 0 01-.12-.14l-.02-.04-.03-.04a2.43 2.43 0 01-.17-.3l-.03-.06a2.5 2.5 0 01-.15-.42l-.01-.07-.02-.1-.01-.06a2.51 2.51 0 01.05-1.01l.02-.09a2.5 2.5 0 01.04-.1c.03-.25.1-.5.21-.74l.1-.17L16.66 10h14.71z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-issuing-SiteMenu-a"
          x1="22.92"
          x2="22.92"
          y1="11.68"
          y2="39.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stopColor="#FF80FF"></stop>
          <stop offset="0.39" stopColor="#FF7BF9"></stop>
          <stop offset="0.77" stopColor="#FF6EEA"></stop>
          <stop offset="1" stopColor="#FF62DC"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-issuing-SiteMenu-b"
          x1="31.38"
          x2="11.62"
          y1="27.93"
          y2="27.93"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0073E6"></stop>
          <stop offset="1" stopColor="#00299C"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TreasuryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-banking-SiteMenu-a)"
        d="M29 14.5c0-.36-.07-.71-.22-1.04l-3.92-8.94A2.52 2.52 0 0022.56 3H2.52A2.54 2.54 0 000 5.56v17.88A2.54 2.54 0 002.52 26h20.04c1 0 1.9-.6 2.3-1.52l3.92-8.94c.15-.33.22-.68.22-1.04z"
      ></path>
      <path
        fill="#00D924"
        d="M11 25.5c0 .36.07.71.22 1.04l3.92 8.94c.4.93 1.3 1.52 2.3 1.52h20.04c1.4 0 2.52-1.14 2.52-2.56V16.56A2.54 2.54 0 0037.48 14H17.44c-1 0-1.9.6-2.3 1.52l-3.92 8.94c-.15.33-.22.68-.22 1.04z"
      ></path>
      <path
        fill="url(#product-icon-banking-SiteMenu-b)"
        d="M28.95 14a2.59 2.59 0 01-.17 1.54l-3.92 8.94c-.4.93-1.3 1.52-2.3 1.52H11.05a2.59 2.59 0 01.17-1.54l3.92-8.94c.4-.93 1.3-1.52 2.3-1.52h11.51z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-banking-SiteMenu-a"
          x1="14.5"
          x2="14.5"
          y1="6.13"
          y2="28.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11EFE3"></stop>
          <stop offset="0.35" stopColor="#14E8E2"></stop>
          <stop offset="0.86" stopColor="#1ED6E1"></stop>
          <stop offset="1" stopColor="#21CFE0"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-banking-SiteMenu-b"
          x1="25.31"
          x2="25.31"
          y1="29.5"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D924"></stop>
          <stop offset="1" stopColor="#00A600"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const RadarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="#9A66FF"
        d="M24.87 4.46a1.26 1.26 0 00-1.8.2l-4.6 5.82L3.42 29.45c.27.22.54.45.78.7a9.42 9.42 0 011.13 1.32l.1.13a9.15 9.15 0 01.8 1.43c.29.62.5 1.28.65 1.95a2.5 2.5 0 002.45 1.93H38.7a1.27 1.27 0 001.27-1.3 42.43 42.43 0 00-15.1-31.15z"
      ></path>
      <path
        fill="url(#product-icon-radar-SiteMenu-a)"
        d="M27.8 21.98A33.82 33.82 0 005.95 4.28a1.29 1.29 0 00-1.56.98L.1 25.4a2.54 2.54 0 001.4 2.88 9.48 9.48 0 012.72 1.87l.17.17c.35.36.67.74.96 1.15l.1.13a9.15 9.15 0 01.8 1.43l20.94-9.31a1.29 1.29 0 00.62-1.74z"
      ></path>
      <path
        fill="url(#product-icon-radar-SiteMenu-b)"
        d="M18.46 10.48l.47.38a33.82 33.82 0 018.87 11.12 1.29 1.29 0 01-.62 1.74L6.25 33.03a9.15 9.15 0 00-.8-1.43l-.1-.13-.23-.3a8.5 8.5 0 00-.74-.85 9.7 9.7 0 00-.95-.86l15.03-18.98z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-radar-SiteMenu-a"
          x1="13.98"
          x2="13.98"
          y1="4.24"
          y2="33.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.26" stopColor="#FF5091"></stop>
          <stop offset="0.91" stopColor="#E03071"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-radar-SiteMenu-b"
          x1="15.68"
          x2="15.68"
          y1="10.48"
          y2="33.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E00F5"></stop>
          <stop offset="1" stopColor="#9860FE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SigmaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-sigma-SiteMenu-a)"
        d="M5 35V7a3 3 0 015.48-1.69L21.2 21 9.32 38H8a3 3 0 01-3-3z"
      ></path>
      <path
        fill="url(#product-icon-sigma-SiteMenu-b)"
        d="M8.06 4h25.16a1.5 1.5 0 011.1 2.51L21.15 21 5.84 4.92A3 3 0 018.05 4z"
      ></path>
      <path
        fill="#9A66FF"
        d="M7.88 38H33.2a1.5 1.5 0 001.11-2.51L21.11 21 7.14 36.33A1 1 0 007.88 38z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-sigma-SiteMenu-a"
          x1="13.1"
          x2="13.1"
          y1="38"
          y2="12.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9860FE"></stop>
          <stop offset="1" stopColor="#6E00F5"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-sigma-SiteMenu-b"
          x1="20.28"
          x2="20.28"
          y1="8.42"
          y2="19.47"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5091"></stop>
          <stop offset="1" stopColor="#E03071"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
export const AtlasIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <g clipPath="url(#product-icon-atlas-SiteMenu-a)">
        <path
          fill="#FB0"
          d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42 8.65 17.31a2.64 2.64 0 01-1.65 3.73l-.17.04c-.12.03-.24.04-.36.05h-.18L20.5 35.99 9.94 18.19l8.2-16.42A2.64 2.64 0 0120.52.3z"
        ></path>
        <path
          fill="url(#product-icon-atlas-SiteMenu-b)"
          d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 3.65 39.33a2.64 2.64 0 01-2.37-3.83l8.66-17.3 8.2-16.43A2.64 2.64 0 0120.52.3z"
        ></path>
        <path
          fill="url(#product-icon-atlas-SiteMenu-c)"
          d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 9.94 18.19l8.2-16.42A2.64 2.64 0 0120.34.3h.18z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="product-icon-atlas-SiteMenu-b"
          x1="16.03"
          x2="15.94"
          y1="18.01"
          y2="39.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD748"></stop>
          <stop offset="0.54" stopColor="#FFCD48"></stop>
          <stop offset="1" stopColor="#FFCB48"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-atlas-SiteMenu-c"
          x1="20.51"
          x2="20.51"
          y1="34.72"
          y2="15.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAD00"></stop>
          <stop offset="1" stopColor="#FF7600"></stop>
        </linearGradient>
        <clipPath id="product-icon-atlas-SiteMenu-a">
          <path fill="#fff" d="M0 0h40v40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const ClimateIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 40 40"
    >
      <path
        fill="url(#product-icon-climate-SiteMenu-a)"
        d="M33.24 21.09c-4.28 0-9.09-2.96-13.24-5.81-4.4-3.04-9.24-7.05-13.24-7.05C2.68 8.23 0 11.96 0 15.28v.28a20 20 0 1040 0c-.13 2.68-2.03 5.53-6.76 5.53z"
      ></path>
      <path
        fill="url(#product-icon-climate-SiteMenu-b)"
        d="M33.24 8.24c-4 0-8.84 4-13.24 7.04-4.15 2.85-8.96 5.8-13.24 5.8-4.73 0-6.63-2.84-6.76-5.52a20 20 0 1040 0v-.28c0-3.32-2.67-7.05-6.76-7.04z"
      ></path>
      <path
        fill="url(#product-icon-climate-SiteMenu-c)"
        d="M20 15.28c4.15 2.85 8.96 5.8 13.24 5.8 4.73 0 6.63-2.84 6.76-5.52a20 20 0 11-40 0c.13 2.68 2.03 5.53 6.76 5.53 4.28 0 9.09-2.96 13.24-5.81z"
      ></path>
      <defs>
        <linearGradient
          id="product-icon-climate-SiteMenu-a"
          x1="20"
          x2="20"
          y1="20.63"
          y2="9.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD748"></stop>
          <stop offset="0.21" stopColor="#FFD644"></stop>
          <stop offset="0.33" stopColor="#FFD438"></stop>
          <stop offset="0.45" stopColor="#FFD024"></stop>
          <stop offset="0.57" stopColor="#FFCB09"></stop>
          <stop offset="1" stopColor="#FFC900"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-climate-SiteMenu-b"
          x1="20"
          x2="20"
          y1="9.56"
          y2="21.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009C00"></stop>
          <stop offset="1" stopColor="#00BA18"></stop>
        </linearGradient>
        <linearGradient
          id="product-icon-climate-SiteMenu-c"
          x1="20"
          x2="20"
          y1="35.28"
          y2="15.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.13" stopColor="#00CB1B"></stop>
          <stop offset="1" stopColor="#00D924"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ToolsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="TerminalIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <path
          id="terminalIconCode"
          d="M44 28a4 4 0 014 4v17a4 4 0 01-4 4H20a4 4 0 01-4-4V32a4 4 0 014-4h24zm-23.2 5.17l-.67.75a.5.5 0 00-.02.64l.06.06 3.29 2.92-3.3 2.92a.5.5 0 00-.03.7l.66.76c.18.2.5.22.7.04l4.97-4.42-4.96-4.41a.5.5 0 00-.7.04z"
        ></path>
        <path
          id="terminalIconCursor"
          d="M27.64 40h6.72c.22 0 .3.02.38.07.09.04.15.1.2.19.04.08.06.16.06.38v.72c0 .22-.02.3-.07.38a.45.45 0 01-.19.2c-.08.04-.16.06-.38.06h-6.72c-.22 0-.3-.02-.38-.07a.45.45 0 01-.2-.19c-.04-.08-.06-.16-.06-.38v-.72c0-.22.02-.3.07-.38.04-.09.1-.15.19-.2.08-.04.16-.06.38-.06z"
        ></path>
        <path
          id="terminalIconGear"
          d="M42.5 42l1.13 3.13.64.13 2.24-2.46.93.38-.16 3.33c.19.11.37.23.54.36l3.02-1.42.7.71-1.41 3.02c.13.17.25.35.36.54l3.33-.16.38.93-2.46 2.24c.05.21.1.42.13.64L55 54.5v1l-3.13 1.13c-.04.25-.1.5-.15.73l2.48 2.15-.38.93-3.28-.24c-.14.24-.3.47-.47.7l1.48 2.94-.71.7-2.94-1.47c-.23.17-.46.33-.7.47l.24 3.28-.93.38-2.15-2.48c-.27.06-.54.12-.82.16L42.5 68h-1l-1.04-3.12c-.28-.04-.55-.1-.82-.16l-2.15 2.48-.93-.38.24-3.28c-.24-.14-.47-.3-.7-.47l-2.94 1.48-.7-.71 1.47-2.94a7.78 7.78 0 01-.47-.7l-3.28.24-.38-.93 2.48-2.15a9.95 9.95 0 01-.16-.82L29 55.5v-1l3.12-1.04c.04-.25.08-.49.14-.73l-2.46-2.24.38-.93 3.33.16c.11-.19.23-.37.36-.54l-1.42-3.02.71-.7 3.02 1.41c.17-.13.35-.25.54-.36l-.16-3.33.93-.38 2.24 2.46s.42-.1.64-.13L41.5 42h1zM42 53a2 2 0 100 4 2 2 0 000-4z"
        ></path>
        <clipPath id="terminalIconClipPath">
          <use href="#terminalIconCode"></use>
        </clipPath>
      </defs>
      <use fill="#7a73ff" href="#terminalIconCode"></use>
      <use
        fill="#0a2540"
        data-js-target="TerminalIcon.cursor"
        href="#terminalIconCursor"
      ></use>
      <use
        fill="#00d4ff"
        data-js-target-list="TerminalIcon.gears"
        href="#terminalIconGear"
      ></use>
      <g clipPath="url(#terminalIconClipPath)">
        <use
          fill="#cff"
          data-js-target-list="TerminalIcon.gears"
          href="#terminalIconGear"
        ></use>
      </g>
    </svg>
  );
};

export const PrebuiltIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="BlocksIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <path d="M30.68 31.37l9 4.15A4 4 0 0142 39.15v10.89a4 4 0 01-2.32 3.63l-9 4.15a4 4 0 01-3.36 0l-9-4.15A4 4 0 0116 50.04V39.15a4 4 0 01.35-1.62L29 43.36v-1.54l-11.85-5.47a4 4 0 011.17-.83l9-4.15a4 4 0 013.36 0z"></path>
        <path
          id="blocksIconFront"
          d="M55 45.15v10.89a4 4 0 01-2.32 3.63l-9 4.15a4 4 0 01-3.36 0l-9-4.15A4 4 0 0129 56.04V45.15a4 4 0 01.35-1.62L42 49.37l12.65-5.84a4 4 0 01.35 1.62zm-11.32-7.78l9 4.15a4 4 0 011.17.83L42 47.82l-11.86-5.47a4 4 0 011.18-.83l9-4.15a4 4 0 013.36 0z"
        ></path>
        <clipPath id="blocksIconClipPath">
          <use
            data-js-bbox="firstHiddenBlock"
            data-js-target-list="BlocksIcon.firstBackBlocks"
            href="#blocksIconFront"
            transform="translate(-13 -6)"
          ></use>
          <use
            data-js-bbox="secondHiddenBlock"
            data-js-target-list="BlocksIcon.secondBackBlocks"
            href="#blocksIconFront"
            transform="translate(-65 -30)"
          ></use>
        </clipPath>
      </defs>
      <use
        data-js-target="BlocksIcon.firstHiddenBlock"
        href="#blocksIconFront"
        transform="translate(-13 -6)"
        visibility="hidden"
      ></use>
      <use
        data-js-target="BlocksIcon.secondHiddenBlock"
        href="#blocksIconFront"
        transform="translate(-65 -30)"
        visibility="hidden"
      ></use>
      <use
        fill="#00d4ff"
        data-js-target-list="BlocksIcon.secondBackBlocks"
        href="#blocksIconFront"
        opacity="0"
      ></use>
      <use
        fill="#7a73ff"
        data-js-target-list="BlocksIcon.secondFrontBlocks"
        href="#blocksIconFront"
        opacity="0"
      ></use>
      <use
        fill="#00d4ff"
        data-js-target-list="BlocksIcon.firstBackBlocks"
        href="#blocksIconFront"
        transform="translate(-13 -6)"
      ></use>
      <use
        fill="#7a73ff"
        data-js-target-list="BlocksIcon.firstFrontBlocks"
        href="#blocksIconFront"
      ></use>
      <g fill="#cff" clipPath="url(#blocksIconClipPath)">
        <use
          data-js-target-list="BlocksIcon.firstFrontBlocks"
          href="#blocksIconFront"
        ></use>
        <use
          data-js-target-list="BlocksIcon.secondFrontBlocks"
          href="#blocksIconFront"
          opacity="0"
        ></use>
      </g>
    </svg>
  );
};

export const CloseToMetalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="NodesIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <path
          id="nodesIconSegment"
          d="M20 41.15l9.7 5.55a1.5 1.5 0 010 2.6L20 54.85v-13.7z"
        ></path>
        <circle id="nodesIconDot" cx="34" cy="48" r="6"></circle>
        <clipPath id="nodesIconClipPath">
          <use
            y="-24"
            className="NodesIcon__dot"
            data-js-target-list="NodesIcon.clipPathDots"
            href="#nodesIconDot"
          ></use>
          <use
            x="21"
            y="-12"
            className="NodesIcon__dot"
            data-js-target-list="NodesIcon.clipPathDots"
            href="#nodesIconDot"
          ></use>
          <use
            x="21"
            y="12"
            className="NodesIcon__dot"
            data-js-target-list="NodesIcon.clipPathDots"
            href="#nodesIconDot"
          ></use>
          <use
            y="24"
            className="NodesIcon__dot"
            data-js-target-list="NodesIcon.clipPathDots"
            href="#nodesIconDot"
          ></use>
          <use
            x="-21"
            y="12"
            className="NodesIcon__dot"
            data-js-target-list="NodesIcon.clipPathDots"
            href="#nodesIconDot"
          ></use>
          <use
            x="-21"
            y="-12"
            className="NodesIcon__dot"
            data-js-target-list="NodesIcon.clipPathDots"
            href="#nodesIconDot"
          ></use>
        </clipPath>
      </defs>
      <g className="NodesIcon__segments">
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
        >
          <use
            fill="#80e9ff"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(60)"
        >
          <use
            fill="#80e9ff"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(120)"
        >
          <use
            fill="#80e9ff"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(180)"
        >
          <use
            fill="#80e9ff"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(240)"
        >
          <use
            fill="#80e9ff"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(300)"
        >
          <use
            fill="#80e9ff"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
      </g>
      <g className="NodesIcon__dots">
        <use
          y="-24"
          fill="#7a73ff"
          className="NodesIcon__dot"
          data-js-target-list="NodesIcon.dots"
          href="#nodesIconDot"
        ></use>
        <use
          x="21"
          y="-12"
          fill="#7a73ff"
          className="NodesIcon__dot"
          data-js-target-list="NodesIcon.dots"
          href="#nodesIconDot"
        ></use>
        <use
          x="21"
          y="12"
          fill="#7a73ff"
          className="NodesIcon__dot"
          data-js-target-list="NodesIcon.dots"
          href="#nodesIconDot"
        ></use>
        <use
          y="24"
          fill="#7a73ff"
          className="NodesIcon__dot"
          data-js-target-list="NodesIcon.dots"
          href="#nodesIconDot"
        ></use>
        <use
          x="-21"
          y="12"
          fill="#7a73ff"
          className="NodesIcon__dot"
          data-js-target-list="NodesIcon.dots"
          href="#nodesIconDot"
        ></use>
        <use
          x="-21"
          y="-12"
          fill="#7a73ff"
          className="NodesIcon__dot"
          data-js-target-list="NodesIcon.dots"
          href="#nodesIconDot"
        ></use>
      </g>
      <g clipPath="url(#nodesIconClipPath)">
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
        >
          <use
            fill="#0048e5"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(60)"
        >
          <use
            fill="#0048e5"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(120)"
        >
          <use
            fill="#0048e5"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(180)"
        >
          <use
            fill="#0048e5"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(240)"
        >
          <use
            fill="#0048e5"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
        <g
          className="NodesIcon__segmentRotator"
          data-js-target-list="NodesIcon.segmentRotators"
          transform="rotate(300)"
        >
          <use
            fill="#0048e5"
            className="NodesIcon__segment"
            data-js-target-list="NodesIcon.segments"
            href="#nodesIconSegment"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export const ImprovingPlatformIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="FastForwardIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <path
          id="fastForwardIconArrow"
          d="M19.15 31.36l21.53 15.15a2 2 0 010 3.27L19.15 64.93A2 2 0 0116 63.29V33a2 2 0 013.15-1.64z"
        ></path>
        <clipPath id="fastForwardIconClipPath">
          <use
            fill="#80e9ff"
            data-js-bbox="firstHiddenArrow"
            data-js-target-list="FastForwardIcon.firstBackArrows"
            href="#fastForwardIconArrow"
          ></use>
          <use
            fill="#80e9ff"
            data-js-bbox="secondHiddenArrow"
            data-js-target-list="FastForwardIcon.secondBackArrows"
            href="#fastForwardIconArrow"
            transform="translate(-42)"
          ></use>
        </clipPath>
      </defs>
      <use
        fill="#80e9ff"
        data-js-target="FastForwardIcon.firstHiddenArrow"
        href="#fastForwardIconArrow"
        visibility="hidden"
      ></use>
      <use
        fill="#80e9ff"
        data-js-target="FastForwardIcon.secondHiddenArrow"
        href="#fastForwardIconArrow"
        transform="translate(-42)"
        visibility="hidden"
      ></use>
      <use
        fill="#80e9ff"
        data-js-target-list="FastForwardIcon.firstBackArrows"
        href="#fastForwardIconArrow"
      ></use>
      <use
        fill="#80e9ff"
        data-js-target-list="FastForwardIcon.secondBackArrows"
        href="#fastForwardIconArrow"
        opacity="0"
      ></use>
      <use
        fill="#7a73ff"
        data-js-target-list="FastForwardIcon.firstFrontArrows"
        href="#fastForwardIconArrow"
        transform="translate(14)"
      ></use>
      <use
        fill="#7a73ff"
        data-js-target-list="FastForwardIcon.secondFrontArrows"
        href="#fastForwardIconArrow"
        opacity="0"
      ></use>
      <g fill="#0048e5" clipPath="url(#fastForwardIconClipPath)">
        <use
          data-js-target-list="FastForwardIcon.firstFrontArrows"
          href="#fastForwardIconArrow"
          transform="translate(14)"
        ></use>
        <use
          data-js-target-list="FastForwardIcon.secondFrontArrows"
          href="#fastForwardIconArrow"
          opacity="0"
        ></use>
      </g>
    </svg>
  );
};

export const BattleTestedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="HealthIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <circle id="healthIconCircle" cx="35" cy="49" r="19"></circle>
        <path
          id="healthIconCheck"
          d="M47 28a9 9 0 110 18 9 9 0 010-18zm3.94 4.73L45 38.78 43.43 37a.83.83 0 00-1.3 1L44 41.2a1 1 0 001.7 0c.3-.41 6-7.57 6-7.57.75-.8-.16-1.51-.76-.9z"
        ></path>
        <clipPath id="healthIconLineClipPath">
          <circle cx="35" cy="49" r="17"></circle>
        </clipPath>
        <clipPath id="healthIconCircleClipPath">
          <use href="#healthIconCircle"></use>
        </clipPath>
      </defs>
      <use fill="#80e9ff" href="#healthIconCircle"></use>
      <path
        d="M16 53h6l2.5-6L29 59l5-20.5L37 53l19 .09"
        className="HealthIcon__line"
        clipPath="url(#healthIconLineClipPath)"
        data-js-target="HealthIcon.line"
      ></path>
      <use
        fill="#7a73ff"
        data-js-target-list="HealthIcon.checks"
        href="#healthIconCheck"
      ></use>
      <use
        fill="#0048e5"
        clipPath="url(#healthIconCircleClipPath)"
        data-js-target-list="HealthIcon.checks"
        href="#healthIconCheck"
      ></use>
    </svg>
  );
};

export const IntelligentOptimisationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="GearsIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <path
          id="gearsIconSmall"
          d="M29.5 28l1.13 3.13.64.13 2.24-2.46.93.38-.16 3.33c.19.11.37.23.54.36l3.02-1.42.7.71-1.41 3.02c.13.17.25.35.36.54l3.33-.16.38.93-2.46 2.24c.05.21.1.42.13.64L42 40.5v1l-3.13 1.13c-.04.25-.1.5-.15.73l2.48 2.15-.38.93-3.28-.24c-.14.24-.3.47-.47.7l1.48 2.94-.71.7-2.94-1.47c-.23.17-.46.33-.7.47l.24 3.28-.93.38-2.15-2.48c-.27.06-.54.12-.82.16L29.5 54h-1l-1.04-3.12c-.28-.04-.55-.1-.82-.16l-2.15 2.48-.93-.38.24-3.28c-.24-.14-.47-.3-.7-.47l-2.94 1.48-.7-.71 1.47-2.94a7.78 7.78 0 01-.47-.7l-3.28.24-.38-.93 2.48-2.15a9.95 9.95 0 01-.16-.82L16 41.5v-1l3.12-1.04c.04-.25.08-.49.14-.73l-2.46-2.24.38-.93 3.33.16c.11-.19.23-.37.36-.54l-1.42-3.02.71-.7 3.02 1.41c.17-.13.35-.25.54-.36l-.16-3.33.93-.38 2.24 2.46s.42-.1.64-.13L28.5 28h1zM29 39a2 2 0 100 4 2 2 0 000-4z"
        ></path>
        <path
          id="gearsIconLarge"
          d="M41.8 38l.88 3.12c.28.03.56.08.83.14l1.9-2.63 1.5.55-.24 3.22c.25.13.49.27.73.42L50.08 41l1.24 1.02-1.35 2.95c.19.2.37.42.54.64l3.16-.8.8 1.38-2.27 2.31c.1.26.2.52.28.79l3.24.32.28 1.57-2.94 1.4v.84l2.94 1.4-.28 1.57-3.24.32c-.08.27-.18.53-.28.79l2.27 2.3-.8 1.4-3.16-.81c-.17.22-.35.43-.54.64l1.35 2.95L50.08 65l-2.68-1.82c-.24.15-.48.29-.73.42l.25 3.22-1.52.55-1.9-2.63c-.26.06-.54.1-.82.14L41.8 68h-1.6l-.88-3.12a12.1 12.1 0 01-.83-.14l-1.9 2.63-1.5-.55.24-3.22c-.25-.13-.49-.27-.73-.42L31.92 65l-1.24-1.02 1.35-2.95c-.19-.2-.37-.42-.54-.64l-3.16.8-.8-1.38 2.27-2.31c-.1-.26-.2-.52-.28-.79l-3.24-.32-.28-1.57 2.94-1.4v-.84L26 51.18l.28-1.57 3.24-.32c.08-.27.18-.53.28-.79l-2.27-2.3.8-1.4 3.16.81c.17-.22.35-.43.54-.64l-1.35-2.95L31.92 41l2.68 1.82c.24-.15.48-.29.73-.42l-.25-3.22 1.52-.55 1.9 2.63c.26-.06.54-.1.82-.14L40.2 38h1.6zM41 50a3 3 0 00-3.02 3A3 3 0 0041 56a3 3 0 003.02-3A3 3 0 0041 50z"
        ></path>
        <clipPath id="gearsIconClipPath">
          <use
            data-js-target-list="GearsIcon.smallGears"
            href="#gearsIconSmall"
          ></use>
        </clipPath>
      </defs>
      <use
        fill="#80e9ff"
        data-js-target-list="GearsIcon.smallGears"
        href="#gearsIconSmall"
      ></use>
      <use
        fill="#7a73ff"
        data-js-target-list="GearsIcon.largeGears"
        href="#gearsIconLarge"
      ></use>
      <g clipPath="url(#gearsIconClipPath)">
        <use
          fill="#0048e5"
          data-js-target-list="GearsIcon.largeGears"
          href="#gearsIconLarge"
        ></use>
      </g>
    </svg>
  );
};

export const KnowWhatYouPayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="PricingIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <path
          id="pricingIconTag"
          d="M41.4 30.38l8.4 8.27A4 4 0 0151 41.5V62a3 3 0 01-3 3H32a3 3 0 01-3-3V41.5a4 4 0 011.2-2.85l8.4-8.27a2 2 0 012.8 0zM40 36a3 3 0 100 6 3 3 0 000-6z"
        ></path>
        <clipPath id="pricingClipPath">
          <use
            href="#pricingIconTag"
            style={{
              WebkitTransformOrigin: 40,
              MsTransformOrigin: 40,
              transformOrigin: 40,
            }}
            data-js-target-list="PricingIcon.tagBacks"
            transform="rotate(45)"
          ></use>
        </clipPath>
      </defs>
      <use
        fill="#80e9ff"
        data-js-target-list="PricingIcon.tagBacks"
        href="#pricingIconTag"
        style={{
          WebkitTransformOrigin: 40,
          MsTransformOrigin: 40,
          transformOrigin: 40,
        }}
        transform="rotate(45)"
      ></use>
      <use
        fill="#7a73ff"
        data-js-target-list="PricingIcon.tagFronts"
        href="#pricingIconTag"
        style={{
          WebkitTransformOrigin: 40,
          MsTransformOrigin: 40,
          transformOrigin: 40,
        }}
      ></use>
      <g clipPath="url(#pricingClipPath)">
        <use
          fill="#0048e5"
          data-js-target-list="PricingIcon.tagFronts"
          href="#pricingIconTag"
          style={{
            WebkitTransformOrigin: 40,
            MsTransformOrigin: 40,
            transformOrigin: 40,
          }}
        ></use>
      </g>
    </svg>
  );
};

export const StartIntegrationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      data-js-controller="CodeFilesIcon"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 96 96"
    >
      <defs>
        <path
          id="codeFilesIconBack"
          d="M21.13 28h16.74c1.79 0 2.43.19 3.08.53.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 01-1.52 1.52c-.65.34-1.3.53-3.08.53H21.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 01-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V33.13c0-1.79.19-2.43.53-3.08.35-.66.86-1.17 1.52-1.52.65-.34 1.3-.53 3.08-.53z"
        ></path>
        <path
          id="codeFilesIconFront"
          d="M45.95 33.53c.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 01-1.52 1.52c-.65.34-1.3.53-3.08.53H26.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 01-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V48c0-3-1-7 9-6 0-2-1-9 4.5-9H43c1.78 0 2.3.19 2.95.53z"
          data-js-target-list="CodeFilesIcon.fileFrontPaths"
          mask="url(#codeFilesCaretMask)"
        ></path>
        <path d="M37.57 52.3a.5.5 0 00-.64.04l-.86.82-.06.07a.5.5 0 00.04.64L39 57l-2.95 3.13-.06.08a.5.5 0 00.08.63l.86.82.07.05a.5.5 0 00.64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 00-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 00-.02-.71l-.86-.82z"></path>
        <clipPath id="codeFilesClipPath">
          <use
            data-js-target-list="CodeFilesIcon.fileBacks"
            href="#codeFilesIconBack"
          ></use>
        </clipPath>
        <mask id="codeFilesCaretMask">
          <path
            fill="#fff"
            d="M45.95 33.53c.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 01-1.52 1.52c-.65.34-1.3.53-3.08.53H26.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 01-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V48c0-3-1-7 9-6 0-2-1-9 4.5-9H43c1.78 0 2.3.19 2.95.53z"
            data-js-target-list="CodeFilesIcon.fileFrontPaths"
          ></path>
          <path
            d="M37.57 52.3a.5.5 0 00-.64.04l-.86.82-.06.07a.5.5 0 00.04.64L39 57l-2.95 3.13-.06.08a.5.5 0 00.08.63l.86.82.07.05a.5.5 0 00.64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 00-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 00-.02-.71l-.86-.82z"
            data-js-target-list="CodeFilesIcon.carets"
          ></path>
          <path
            d="M37.57 52.3a.5.5 0 00-.64.04l-.86.82-.06.07a.5.5 0 00.04.64L39 57l-2.95 3.13-.06.08a.5.5 0 00.08.63l.86.82.07.05a.5.5 0 00.64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 00-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 00-.02-.71l-.86-.82z"
            data-js-target-list="CodeFilesIcon.carets"
          ></path>
        </mask>
      </defs>
      <use
        fill="#80e9ff"
        data-js-target-list="CodeFilesIcon.fileBacks"
        href="#codeFilesIconBack"
      ></use>
      <use
        fill="#7a73ff"
        data-js-target-list="CodeFilesIcon.fileFronts"
        href="#codeFilesIconFront"
      ></use>
      <g clipPath="url(#codeFilesClipPath)">
        <use
          fill="#0048e5"
          data-js-target-list="CodeFilesIcon.fileFronts"
          href="#codeFilesIconFront"
        ></use>
      </g>
    </svg>
  );
};
