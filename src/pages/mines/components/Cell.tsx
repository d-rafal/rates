import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import React from "react";
import styles from "./Cell.module.scss";

import FlagIcon from "@mui/icons-material/Flag";

import cx from "classnames";
import { CellData } from "../hooks/useGetGameConfig";

interface CellsProps {
  cellData: CellData;
  onClickHandle: (pos: CellData["pos"]) => void;
  onContextMenuHandle: (pos: CellData["pos"]) => void;
  onDoubleClickHandle: (pos: CellData["pos"]) => void;
}

const Cell = ({
  cellData,
  onClickHandle,
  onContextMenuHandle,
  onDoubleClickHandle,
}: CellsProps) => {
  let content = null;

  if (typeof cellData.reviled === "number") {
    content = cellData.reviled;
  }

  return (
    <div
      className={cx(
        {
          [styles.unrevealed]: cellData.reviled === false,
          [styles.empty]: cellData.reviled === "empty",
          [styles.fault]: cellData.reviled === "fault",
          [styles.marked]: cellData.reviled === "marked",
          [styles.wrongMark]: cellData.reviled === "wrongMark",
          [styles.oneBomb]: cellData.reviled === 1,
          [styles.twoBombs]: cellData.reviled === 2,
          [styles.threeBombs]: cellData.reviled === 3,
          [styles.fourBombs]: cellData.reviled === 4,
          [styles.fiveBombs]: cellData.reviled === 5,
          [styles.sixBombs]: cellData.reviled === 6,
          [styles.sevenBombs]: cellData.reviled === 7,
          [styles.eightBombs]: cellData.reviled === 8,
        },
        styles.container
      )}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenuHandle(cellData.pos);
      }}
      onClick={() => onClickHandle(cellData.pos)}
      onDoubleClick={() => onDoubleClickHandle(cellData.pos)}
    >
      {(cellData.reviled === "fault" ||
        (cellData.reviled === false && cellData.hasBomb && false)) && (
        <ReportGmailerrorredIcon />
      )}
      {(cellData.reviled === "marked" || cellData.reviled === "wrongMark") && (
        <FlagIcon />
      )}

      {content}
      {/* {String(cellData.pos.x) + String(cellData.pos.y)} */}
    </div>
  );
};

export default React.memo(Cell);
