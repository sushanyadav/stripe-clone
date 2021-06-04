const StripeLines = () => {
  return (
    <div
      className="relative z-10 flex items-center justify-between h-10 sm:h-16  w-full"
      style={{
        transform: "skewY(-6deg)",
        transformOrigin: "100% 0",
      }}
    >
      <div
        className="absolute top-0 left-0 h-full flex flex-col items-center"
        style={{ width: "18.5%", minWidth: "8rem" }}
      >
        <div
          style={{ backgroundColor: "#80e9ff" }}
          className=" h-full w-1/2 -mb-2 opacity-80"
        ></div>

        <div
          style={{ backgroundColor: "#0048e5" }}
          className="h-full w-full opacity-70"
        ></div>
      </div>
      <div
        className="absolute top-4 md:top-7 right-0 h-full flex flex-col items-center"
        style={{ width: "18.5%", minWidth: "8rem" }}
      >
        <div
          style={{ backgroundColor: "#80e9ff" }}
          className="h-full w-full"
        ></div>

        <div
          style={{ backgroundColor: "#0048e5" }}
          className="h-full  w-1/2 -mt-2 opacity-60"
        ></div>
      </div>
    </div>
  );
};

export default StripeLines;
