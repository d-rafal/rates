import { GameConfig, type LayoutConfig } from "../hooks/useGetGameConfig";
import useOnClickHandle from "../hooks/useOnClickHandle";
import useOnContextMenuHandle from "../hooks/useOnContextMenuHandle";
import useOnDoubleClickHandle from "../hooks/useOnDoubleClick";
import Cell from "./Cell";
import styles from "./GameLayout.module.scss";

declare module "csstype" {
  interface Properties {
    // Add a missing property
    // WebkitRocketLauncher?: string;

    // Add a CSS Custom Property
    "--columns-size"?: string;
    "--rows-size"?: string;

    // ...or allow any other property
    // [index: string]: any;
  }
}

interface GameLayoutProps {
  layoutConfig: LayoutConfig;
  setLayoutConfig: React.Dispatch<React.SetStateAction<LayoutConfig>>;
  gameStatus: GameConfig["status"];
  setGameConfig: React.Dispatch<React.SetStateAction<GameConfig>>;
}

const GameLayout = ({
  layoutConfig,
  setLayoutConfig,
  gameStatus,
  setGameConfig,
}: GameLayoutProps) => {
  const onClickHandle = useOnClickHandle(
    setLayoutConfig,
    gameStatus,
    setGameConfig
  );
  const onDoubleClickHandle = useOnDoubleClickHandle(setLayoutConfig);
  const onContextMenuHandle = useOnContextMenuHandle(setLayoutConfig);

  const cells = layoutConfig.map((tab) => {
    return tab.map((cellData) => (
      <Cell
        key={String(cellData.pos.x) + String(cellData.pos.y)}
        cellData={cellData}
        onClickHandle={onClickHandle}
        onContextMenuHandle={onContextMenuHandle}
        onDoubleClickHandle={onDoubleClickHandle}
      />
    ));
  });

  // new Array(rowsSize).fill(null).map((_, indexX) =>
  //   new Array(columnsSize).fill(null).map((_, indexY) => {
  //     const key = String(indexX) + String(indexY);
  //     return <Cell key={key} pos={key} />;
  //   })
  // );

  return (
    <div className={styles.container}>
      <div
        className={styles.cellsLayout}
        style={{
          "--rows-size": String(cells.length),
          "--columns-size": String(cells[0].length),
        }}
      >
        {cells}
      </div>
    </div>
  );
};

export default GameLayout;
