import { useLayoutEffect, useState } from "react";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  function handeResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handeResize();
    addEventListener("resize", handeResize);
    return () => removeEventListener("resize", handeResize);
  }, []);
  return windowSize;
}
