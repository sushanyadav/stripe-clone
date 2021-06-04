import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/dracula";
import darkTheme from "prism-react-renderer/themes/vsDark";

const Code = ({ codeString, hasHeading, noLineNumbers, topRounded, dark }) => {
  const topRoundedClass = topRounded ? "rounded-b-none" : "rounded-t-none";

  const theme = dark ? darkTheme : lightTheme;

  return (
    <Highlight {...defaultProps} theme={theme} code={codeString} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {hasHeading && (
            <div
              style={{ backgroundColor: "#0a2540" }}
              className="h-7 flex items-center justify-between pr-2 text-sm"
            >
              <div className="flex items-center">
                <span
                  style={{ backgroundColor: "#8095ff" }}
                  className="p-1 text-gray-900 font-semibold status"
                >
                  NORMAL
                </span>
                <span
                  style={{ color: "#8095ff" }}
                  className="ml-6 inline-block font-semibold self-center"
                >
                  server.js
                </span>
              </div>
              <div className="text-gray-500 font-semibold space-x-3">
                <span>600%</span>
                <span>☰</span>
                <span>6/1</span>
                <span>ln</span>
                <span>:</span>
                <span>4</span>
              </div>
            </div>
          )}
          <pre
            className={`${className} ${topRoundedClass} rounded-lg p-4 overflow-scroll code`}
            style={style}
          >
            {tokens.map((line, i) => {
              return (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className="flex gap-6"
                >
                  {!noLineNumbers && (
                    <span className="opacity-20 select-none">
                      {line.length === 1 && line[0].empty ? "~" : i + 1}
                    </span>
                  )}
                  <div>
                    {line.map((token, key) => {
                      return (
                        <span key={key} {...getTokenProps({ token, key })} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </pre>
        </>
      )}
    </Highlight>
  );
};

export default Code;
