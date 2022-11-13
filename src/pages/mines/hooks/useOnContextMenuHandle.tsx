import React, { useCallback } from "react";
import { CellData, LayoutConfig } from "./useGetGameConfig";

const useOnContextMenuHandle = (
  setLayoutConfig: React.Dispatch<React.SetStateAction<LayoutConfig>>
) => {
  const onContextMenuHandle = useCallback(
    (pos: CellData["pos"]) => {
      setLayoutConfig((prevLayoutConfig) => {
        const prevCellData = prevLayoutConfig[pos.x][pos.y];
        if (
          prevCellData.reviled === false ||
          prevCellData.reviled === "marked"
        ) {
          const updatedCellData = {
            ...prevCellData,
          };

          if (prevCellData.reviled === false) {
            updatedCellData.reviled = "marked";
          }
          if (prevCellData.reviled === "marked") {
            updatedCellData.reviled = false;
          }

          return prevLayoutConfig.map((tab) =>
            tab.map((cellData) =>
              cellData === prevCellData ? updatedCellData : cellData
            )
          );
        }

        return prevLayoutConfig;
      });
    },
    [setLayoutConfig]
  );

  return onContextMenuHandle;
};

export default useOnContextMenuHandle;
