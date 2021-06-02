import Link from "next/link";
import { useState } from "react";

const Button = ({
  backgroundClass,
  hoverBackgroundClass,
  classNames,
  text,
  linkTo,
  noPadding,
}) => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const bgClass = backgroundClass || "";
  const bgHoverClass = hoverBackgroundClass || "";
  const additionalClassNames = classNames || "";
  const href = linkTo || "/";
  const noPaddingClass = noPadding ? "" : "py-2 px-4";

  return (
    <Link href={href}>
      <a
        style={{ lineHeight: "16px" }}
        className={`${bgClass} ${bgHoverClass} ${noPaddingClass} flex items-center self-start rounded-md lg:rounded-full text-white font-semibold ${additionalClassNames}`}
        onMouseOver={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        <span className="mr-1.5">{text}</span>
        {buttonHovered ? (
          <svg
            style={{ transform: "rotate(180deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
            x="0"
            y="0"
            enableBackground="new 0 0 550.354 550.354"
            version="1.1"
            viewBox="0 0 550.354 550.354"
            xmlSpace="preserve"
            height="9"
            width="9"
          >
            <path d="M541.169 208.807H261.295c-5.07 0-5.906-2.484-1.87-5.551l68.373-51.919c4.039-3.066 7.311-9.66 7.311-14.73V25.578c0-5.07-3.269-6.689-7.301-3.614L3.025 269.61c-4.033 3.075-4.033 8.057 0 11.132L327.811 528.39c4.033 3.076 7.301 1.457 7.301-3.613V413.748c0-5.07-3.274-11.665-7.311-14.73l-68.372-51.919c-4.04-3.066-3.201-5.551 1.87-5.551h279.876a9.18 9.18 0 009.18-9.181V217.988c-.006-5.071-4.116-9.181-9.186-9.181z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className=" fill-current"
            enableBackground="new 0 0 491.1 491.1"
            version="1.1"
            viewBox="0 0 491.1 491.1"
            xmlSpace="preserve"
            height="9"
            width="9"
          >
            <path d="M379.25 282.85l-192.8 192.8c-20.6 20.6-54 20.6-74.6 0s-20.6-54 0-74.6l155.5-155.5-155.5-155.5c-20.6-20.6-20.6-54 0-74.6s54-20.6 74.6 0l192.8 192.8c20.6 20.6 20.6 54 0 74.6z"></path>
          </svg>
        )}
      </a>
    </Link>
  );
};

export default Button;
