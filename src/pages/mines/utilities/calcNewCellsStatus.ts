import _ from "lodash";
import {
  type BombsAround,
  type CellData,
  type LayoutConfig,
} from "../hooks/useGetGameConfig";
import { getSurroundingCells } from "./getSurroundingCells";

interface Options {
  doubleClickMode?: boolean;
}

export const calcNewLayoutStatus = (
  cellBeingProcessed: CellData,
  prevLayoutConfig: LayoutConfig,
  options: Options = {}
) => {
  const newCellData = _.cloneDeep(cellBeingProcessed);

  let newLayoutConfig = prevLayoutConfig.map((tab) =>
    tab.map((cellData) =>
      cellData === cellBeingProcessed ? newCellData : cellData
    )
  );
  if (
    options.doubleClickMode &&
    newCellData.hasBomb &&
    newCellData.reviled === false
  ) {
    newCellData.reviled = "fault";

    return newLayoutConfig;
  }

  if (
    options.doubleClickMode &&
    !newCellData.hasBomb &&
    newCellData.reviled === "marked"
  ) {
    newCellData.reviled = "wrongMark";

    return newLayoutConfig;
  }

  if (
    options.doubleClickMode &&
    cellBeingProcessed.hasBomb &&
    newCellData.reviled === "marked"
  ) {
    return newLayoutConfig;
  }

  if (cellBeingProcessed.hasBomb && !options.doubleClickMode) {
    newCellData.reviled = "fault";

    return newLayoutConfig;
  }

  const surroundingCells = getSurroundingCells(
    newCellData.pos,
    prevLayoutConfig
  );
  const bombsAround = surroundingCells.filter(
    (cellConfig) => cellConfig.hasBomb
  ).length;

  if (bombsAround) {
    newCellData.reviled = bombsAround as BombsAround;

    return newLayoutConfig;
  }

  newCellData.reviled = "empty";

  surroundingCells
    .filter((cellData) => cellData.reviled === false)
    .forEach((cellData) => {
      newLayoutConfig = calcNewLayoutStatus(cellData, newLayoutConfig);
    });

  return newLayoutConfig;
};
