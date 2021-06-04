const DashedLines = ({ zIndex, opacity }) => {
  return (
    <div className="grid grid-cols-3">
      <div
        style={{ zIndex: zIndex || "-1" }}
        className={`border-gray-200 ${opacity} absolute top-0 right-0 border-dashed sm:border-l border-r h-full  w-1/4`}
      ></div>
      <div
        style={{ zIndex: zIndex || "-1" }}
        className={`border-gray-200 ${opacity} absolute sm:block hidden top-0 left-0 border-dashed border-r h-full  w-1/4`}
      ></div>
      <div
        style={{ zIndex: zIndex || "-1" }}
        className={`border-gray-200 ${opacity} absolute inset-0 border-dashed sm:border-r border-l h-full  w-1/2`}
      ></div>
    </div>
  );
};

export default DashedLines;
