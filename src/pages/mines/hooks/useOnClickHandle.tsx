import React, { useCallback } from "react";
import { calcNewLayoutStatus } from "../utilities/calcNewCellsStatus";
import { CellData, GameConfig, LayoutConfig } from "./useGetGameConfig";

const useOnClickHandle = (
  setLayoutConfig: React.Dispatch<React.SetStateAction<LayoutConfig>>,
  gameStatus: GameConfig["status"],
  setGameConfig: React.Dispatch<React.SetStateAction<GameConfig>>
) => {
  const onClickHandle = useCallback(
    (pos: CellData["pos"]) => {
      setLayoutConfig((prevLayoutConfig) => {
        const prevCellData = prevLayoutConfig[pos.x][pos.y];

        if (
          prevCellData.reviled !== false
          // && prevCellConfig.reviled !== "marked"
        ) {
          return prevLayoutConfig;
        }

        return calcNewLayoutStatus(prevCellData, prevLayoutConfig);
      });

      if (gameStatus !== "active") {
        setGameConfig((prev) => ({ ...prev, status: "active" }));
      }
    },
    [setLayoutConfig, gameStatus, setGameConfig]
  );

  return onClickHandle;
};

export default useOnClickHandle;
