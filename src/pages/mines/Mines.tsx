import GameLayout from "./components/GameLayout";
import Menu from "./components/Menu";
import styles from "./Mines.module.scss";

const Mines = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <GameLayout />
    </div>
  );
};

export default Mines;
