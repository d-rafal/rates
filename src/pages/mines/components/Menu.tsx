import { Button } from "@mui/material";
import { type LayoutConfig } from "../hooks/useGetGameConfig";

import styles from "./Menu.module.scss";

interface MenuProps {
  layoutConfig: LayoutConfig;
}

const Menu = ({ layoutConfig }: MenuProps) => {
  let allBombs = 0;
  let markedBombs = 0;

  layoutConfig.forEach((tab) => {
    allBombs += tab.filter((cellData) => cellData.hasBomb).length;
    markedBombs += tab.filter(
      (cellData) => cellData.reviled === "marked"
    ).length;
  });

  return (
    <div className={styles.container}>
      Bombs left: {allBombs - markedBombs} / {allBombs}
    </div>
  );
};

export default Menu;
