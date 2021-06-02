const DashedLines = ({ darkerBorderlines, zIndex }) => {
  const lighterColor = darkerBorderlines
    ? "border-gray-800"
    : "border-gray-200";

  return (
    <div className="grid grid-cols-3">
      <div
        style={{ zIndex: zIndex || "-1" }}
        className={`${lighterColor} absolute top-0 right-0 border-dashed sm:border-l border-r h-full  w-1/4`}
      ></div>
      <div
        style={{ zIndex: zIndex || "-1" }}
        className={`${lighterColor} absolute sm:block hidden top-0 left-0 border-dashed border-r h-full  w-1/4`}
      ></div>
      <div
        style={{ zIndex: zIndex || "-1" }}
        className={`${lighterColor} absolute inset-0 border-dashed sm:border-r border-l h-full  w-1/2`}
      ></div>
    </div>
  );
};

export default DashedLines;
