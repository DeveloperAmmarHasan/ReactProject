import React, { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function lister(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("mousedown", lister);
    document.addEventListener("touchstart", lister);

    return () => {
      document.removeEventListener("mousedown", lister);
      document.removeEventListener("touchstart", lister);
    };
  }, [ref, handler]);
  return;
}
