import { useState } from "react";
import { Cell, Modal } from "./components";
import { CELLS_PER_ROW, INITIAL_ACTIVE_COLOR } from "./consts";
import { ActiveColorContext } from "./contexts";
import { type XYCoords } from "./types";

const initialCellSize = window.innerWidth / CELLS_PER_ROW;
const numberOfRows = Math.floor(window.innerHeight / initialCellSize);

const cells = Array.from({ length: numberOfRows * CELLS_PER_ROW }).map(
  (_, cellIndex) => <Cell key={cellIndex} size={initialCellSize} />
);

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: `repeat(${CELLS_PER_ROW}, ${initialCellSize}px)`,
  gridTemplateRows: `repeat(${numberOfRows}, ${initialCellSize}px)`,
};

export const App = () => {
  const [activeColor, setActiveColor] = useState<number>(INITIAL_ACTIVE_COLOR);
  const [showColorModal, setShowColorModal] = useState<boolean>(false);
  const [modalCoords, setModalCoords] = useState<XYCoords>({ x: 0, y: 0 });

  const openModal = () => {
    setShowColorModal(true);
  };

  const closeModal = () => {
    setShowColorModal(false);
  };

  const handleColorChange: React.MouseEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    openModal();
    setModalCoords({ x: event.pageX, y: event.pageY });
  };

  return (
    <ActiveColorContext value={activeColor}>
      {showColorModal && (
        <Modal
          modalCoords={modalCoords}
          onSelect={setActiveColor}
          onClose={closeModal}
        />
      )}
      <main onContextMenu={handleColorChange} style={gridStyle}>
        {cells}
      </main>
    </ActiveColorContext>
  );
};
