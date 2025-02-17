import { memo } from "react";
import { COLORS } from "../consts";
import { useCellColor } from "../hooks";

interface CellProps {
  size: number;
}

export const Cell = memo(({ size }: CellProps) => {
  const {
    color,
    handlers: { handleMouseDown, handleMouseEnter },
  } = useCellColor();

  return (
    <div
      style={{
        width: size,
        height: size,
        border: "1px solid grey",
        backgroundColor: COLORS[color],
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
    ></div>
  );
});
