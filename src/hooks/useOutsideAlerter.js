import { useEffect, useRef } from "react";

const useOutsideAlerter = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", maybeHandler);

    return () => {
      document.removeEventListener("click", maybeHandler);
    };
  });

  return domNode;
};

export default useOutsideAlerter;
