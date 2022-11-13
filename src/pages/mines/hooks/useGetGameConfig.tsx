import { useCallback, useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ColumnsSizeQueryInUrlAllowedDefinedValues,
  RowsSizeQueryInUrlAllowedDefinedValues,
} from "../../../@types-and-const/@url-queries/@mines/@layout-sizes";
import { getRandomIntInclusive } from "../../../utilities/getRandomIntInclusive";
import useGetConfig from "./useGetConfig";

export type BombsAround = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface CellData {
  hasBomb: boolean;
  reviled: false | "marked" | BombsAround | "empty" | "fault" | "wrongMark";
  pos: { x: number; y: number };
}

enum GameStatus {
  Idle = "idle",
  Active = "active",
  Paused = "paused",
}

type GameStatusUnion = `${GameStatus}`;

export interface GameConfig {
  status: GameStatusUnion;
  timeBase: number;
  gameTime: number;
  startTimeCalc: Date;
  bestScrolls: GameConfig["gameTime"][];
  rowsQuantity: RowsSizeQueryInUrlAllowedDefinedValues;
  columnsQuantity: ColumnsSizeQueryInUrlAllowedDefinedValues;
  minesPercent: number;
}

export type LayoutConfig = CellData[][];

export interface InitializeLayoutConfig {
  (
    rowsSize: RowsSizeQueryInUrlAllowedDefinedValues,
    columnsSize: ColumnsSizeQueryInUrlAllowedDefinedValues,
    minesPercent: number
  ): void;
}

const getBombsArrangement = (
  rowsSize: number,
  columnsSize: number,
  minesPercent: number
) => {
  const bombs = new Set<number>();

  const maxBombs = Math.floor((rowsSize * columnsSize * minesPercent) / 100);

  while (bombs.size < maxBombs) {
    bombs.add(getRandomIntInclusive(0, rowsSize * columnsSize - 1));
  }

  return bombs;
};

const getLayoutConfig = (
  rowsSize: number,
  columnsSize: number,
  minesPercent: number
) => {
  const bombs = getBombsArrangement(rowsSize, columnsSize, minesPercent);

  const cells = new Array(rowsSize).fill(null).map((_, indexX) =>
    new Array(columnsSize).fill(null).map<CellData>((_, indexY) => {
      return {
        hasBomb: bombs.has(indexX * columnsSize + indexY),
        reviled: false,
        pos: { x: indexX, y: indexY },
      };
    })
  );

  return cells;
};

const useGetGameConfig = () => {
  const [searchParams] = useSearchParams();
  const [rowsSize, columnsSize, minesPercent] = useGetConfig(searchParams);

  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>(() =>
    getLayoutConfig(rowsSize, columnsSize, minesPercent)
  );

  const [gameConfig, setGameConfig] = useState<GameConfig>(() => ({
    status: GameStatus.Idle,
    timeBase: 0,
    gameTime: 0,
    startTimeCalc: new Date(),
    bestScrolls: [],
    rowsQuantity: rowsSize,
    columnsQuantity: columnsSize,
    minesPercent: minesPercent,
  }));

  const initializeLayoutConfig: InitializeLayoutConfig = useCallback(
    (rowsSize, columnsSize, minesPercent) => {
      setLayoutConfig(getLayoutConfig(rowsSize, columnsSize, minesPercent));

      setGameConfig((prev) => ({
        ...prev,
        rowsQuantity: rowsSize,
        columnsQuantity: columnsSize,
        minesPercent: minesPercent,
      }));
    },
    []
  );

  useLayoutEffect(() => {
    let timerId: NodeJS.Timer | null = null;

    switch (gameConfig.status) {
      case GameStatus.Idle:
        setGameConfig((prev) => ({
          ...prev,
          startTimeCalc: new Date(),
          timeBase: 0,
        }));

        break;

      case GameStatus.Active:
        setGameConfig((prev) => ({
          ...prev,
          startTimeCalc: new Date(),
          timeBase: prev.gameTime,
        }));

        timerId = setInterval(() => {
          setGameConfig((prev) => ({
            ...prev,
            gameTime:
              prev.timeBase +
              new Date().getTime() -
              prev.startTimeCalc.getTime(),
          }));
        }, 100);
        break;

      case GameStatus.Paused:
        setGameConfig((prev) => ({
          ...prev,
          timeBase: prev.gameTime,
        }));

        break;

      default:
        break;
    }

    // if (gameConfig.status === GameStatus.Active) {
    // }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameConfig.status]);

  // useEffect(() => {
  //   setCellsConfig(getCellsConfig(rowsSize, columnsSize));
  // }, [rowsSize, columnsSize]);

  return {
    layoutConfig,
    setLayoutConfig,
    initializeLayoutConfig,
    gameConfig,
    setGameConfig,
  };
};

export default useGetGameConfig;
