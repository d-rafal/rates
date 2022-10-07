import LayoutSizeSelection from "./LayoutSizeSelection";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.container}>
      <LayoutSizeSelection />
    </div>
  );
};

export default Menu;
