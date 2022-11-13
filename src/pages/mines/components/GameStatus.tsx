import React from "react";
import { GameConfig, LayoutConfig } from "../hooks/useGetGameConfig";
import Menu from "./Menu";

interface GameStatusProps {
  layoutConfig: LayoutConfig;
  gameConfig: GameConfig;
  setGameConfig: React.Dispatch<React.SetStateAction<GameConfig>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameStatus = ({
  layoutConfig,
  gameConfig,
  setGameConfig,
  setIsModalOpen,
}: GameStatusProps) => {
  return (
    <div>
      <Menu layoutConfig={layoutConfig} />

      {Math.round(gameConfig.gameTime / 1000)}

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <button
        onClick={() => setGameConfig((prev) => ({ ...prev, status: "idle" }))}
      >
        Pause
      </button>
    </div>
  );
};

export default GameStatus;
