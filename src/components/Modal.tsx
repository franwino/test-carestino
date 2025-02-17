import { ColorBox } from ".";
import { COLORS } from "../consts";
import { type XYCoords } from "../types";

interface ModalProps {
  modalCoords: XYCoords;
  onSelect: (color: number) => void;
  onClose: () => void;
}

export const Modal = ({ modalCoords, onSelect, onClose }: ModalProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: modalCoords.y,
        left: modalCoords.x,
        backgroundColor: "white",
        border: "1px solid grey",
        display: "flex",
        padding: "4px",
        gap: "4px",
      }}
      onMouseLeave={onClose}
    >
      {Object.keys(COLORS).map((color) => (
        <ColorBox
          key={color}
          color={color}
          onClick={() => {
            onSelect(+color);
            onClose();
          }}
        />
      ))}
    </div>
  );
};
