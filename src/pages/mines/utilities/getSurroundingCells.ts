import { type CellData, type LayoutConfig } from "../hooks/useGetGameConfig";
import { getCellsInRow } from "./getCellsInRow";

export const getSurroundingCells = (
  pos: CellData["pos"],
  layoutConfig: LayoutConfig
) => {
  const surroundingCells: CellData[] = [];

  const prevRow = pos.x - 1;
  const nextRow = pos.x + 1;
  const prevCol = pos.y - 1;
  const nextCol = pos.y + 1;

  if (prevRow >= 0) {
    surroundingCells.push(
      ...getCellsInRow(prevRow, pos.y, prevCol, nextCol, layoutConfig)
    );
  }

  if (nextRow < layoutConfig.length) {
    surroundingCells.push(
      ...getCellsInRow(nextRow, pos.y, prevCol, nextCol, layoutConfig)
    );
  }

  if (prevCol >= 0) {
    surroundingCells.push(layoutConfig[pos.x][prevCol]);
  }

  if (nextCol < layoutConfig[pos.x].length) {
    surroundingCells.push(layoutConfig[pos.x][nextCol]);
  }

  return surroundingCells;
};
