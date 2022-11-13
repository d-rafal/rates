import React, { useCallback } from "react";
import { calcNewLayoutStatus } from "../utilities/calcNewCellsStatus";
import { getSurroundingCells } from "../utilities/getSurroundingCells";
import { CellData, LayoutConfig } from "./useGetGameConfig";

const useOnDoubleClickHandle = (
  setLayoutConfig: React.Dispatch<React.SetStateAction<LayoutConfig>>
) => {
  const onDoubleClickHandle = useCallback(
    (pos: CellData["pos"]) => {
      setLayoutConfig((prevLayoutConfig) => {
        const prevCellData = prevLayoutConfig[pos.x][pos.y];

        if (typeof prevCellData.reviled !== "number") {
          return prevLayoutConfig;
        }

        const surroundingCells = getSurroundingCells(pos, prevLayoutConfig);

        const bombsAround = surroundingCells.filter(
          (cellData) => cellData.hasBomb
        ).length;

        const markedBombsAround = surroundingCells.filter(
          (cellData) => cellData.reviled === "marked"
        ).length;

        if (markedBombsAround === bombsAround) {
          let newLayoutConfig = prevLayoutConfig;

          surroundingCells
            .filter(
              (cellData) =>
                cellData.reviled === false || cellData.reviled === "marked"
            )
            .forEach((cellData) => {
              newLayoutConfig = calcNewLayoutStatus(cellData, newLayoutConfig, {
                doubleClickMode: true,
              });
            });

          return newLayoutConfig;
        } else {
          return prevLayoutConfig;
        }
      });
    },
    [setLayoutConfig]
  );

  return onDoubleClickHandle;
};

export default useOnDoubleClickHandle;
