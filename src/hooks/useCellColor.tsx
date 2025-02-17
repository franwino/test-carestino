import { useState } from "react";
import { EMPTY_COLOR_INDEX } from "../consts";
import { useActiveColorContext } from "../contexts";

export const useCellColor = () => {
  const [color, setColor] = useState<number>(EMPTY_COLOR_INDEX);
  const activeColor = useActiveColorContext();

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // only left click
    if (event.button !== 0) return;
    setColor((currentColor) =>
      currentColor !== EMPTY_COLOR_INDEX ? EMPTY_COLOR_INDEX : activeColor
    );
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // only left click
    if (event.buttons <= 0) return;
    event.stopPropagation();
    setColor(() => activeColor);
  };

  return { color, handlers: { handleMouseDown, handleMouseEnter } };
};
