import { Modal } from "@mui/material";
import { useCallback, useState } from "react";

import GameLayout from "./components/GameLayout";
import GameStatus from "./components/GameStatus";
import LayoutSizeSelection from "./components/LayoutSizeSelection";
import useGetGameConfig from "./hooks/useGetGameConfig";
import styles from "./Mines.module.scss";

const Mines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const {
    layoutConfig,
    setLayoutConfig,
    initializeLayoutConfig,
    gameConfig,
    setGameConfig,
  } = useGetGameConfig();

  return (
    <div className={styles.container}>
      <GameLayout
        layoutConfig={layoutConfig}
        setLayoutConfig={setLayoutConfig}
        setGameConfig={setGameConfig}
        gameStatus={gameConfig.status}
      />
      <GameStatus
        // initializeLayoutConfig={initializeLayoutConfig}
        layoutConfig={layoutConfig}
        gameConfig={gameConfig}
        setGameConfig={setGameConfig}
        setIsModalOpen={setIsModalOpen}
      />

      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={closeModal}
          aria-labelledby="game-config-title"
        >
          <LayoutSizeSelection
            setIsModalOpen={setIsModalOpen}
            initializeLayoutConfig={initializeLayoutConfig}
          />
        </Modal>
      )}
    </div>
  );
};

export default Mines;
