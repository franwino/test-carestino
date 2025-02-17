import { COLORS } from "../consts";

interface ColorBoxProps {
  color: string;
  onClick: () => void;
}

export const ColorBox = ({ color, onClick }: ColorBoxProps) => {
  return (
    <div
      style={{
        backgroundColor: COLORS[+color],
        width: "20px",
        height: "20px",
        borderRadius: "15%",
        border: "1px solid grey",
      }}
      onClick={onClick}
    />
  );
};
