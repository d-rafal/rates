import { useEffect } from "react";
import { useSetAppBarTitleContext } from "./AppBarTitleProvider";

const useUpdateAppBarTitle = (title: string) => {
  const setTitleContext = useSetAppBarTitleContext();

  useEffect(() => {
    setTitleContext(title);
  }, [setTitleContext, title]);

  return null;
};

export default useUpdateAppBarTitle;
