import { RefObject, useEffect, useRef, useState } from "react";

/***
 * Hook for checking if the mouse is hovering the component
 * 
 * @returns ref object and hovering boolean
 */
const useHover = (): [RefObject<HTMLDivElement | null>, boolean] => {
  const [value, setValue] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseOver);
      node.addEventListener("mouseleave", handleMouseOut);

      return () => {
        node.removeEventListener("mouseenter", handleMouseOver);
        node.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, value];
};

export default useHover;