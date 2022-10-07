import { useSearchParams } from "react-router-dom";
import useGetSizes from "../hooks/useGetSizes";
import styles from "./GameLayout.module.scss";

const GameLayout = () => {
  const [searchParams] = useSearchParams();
  const [xSize, ySize] = useGetSizes(searchParams);

  return (
    <div className={styles.container}>
      {xSize}, {ySize}
    </div>
  );
};

export default GameLayout;
