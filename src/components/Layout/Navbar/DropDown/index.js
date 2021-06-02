const DropDown = ({
  children,
  trianglePosLeft,
  wrapperAdditionalClassName,
}) => {
  return (
    <div
      className={`${wrapperAdditionalClassName} absolute top-16 z-50 mx-auto`}
      style={{
        transform: "translateX(-50%)",
        left: "50%",
      }}
    >
      <div
        style={{
          width: "0",
          height: "0",
          borderLeft: "0.6rem solid transparent",
          borderRight: "0.6em solid transparent",
          borderBottom: "0.6rem solid #fff",
          position: "absolute",
          top: "-0.4rem",
          left: trianglePosLeft,
          zIndex: 5,
        }}
      ></div>
      <div className=" rounded-lg shadow-2xl p-10 bg-white">{children}</div>
    </div>
  );
};

export default DropDown;
