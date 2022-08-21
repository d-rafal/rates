import { createContext, useState } from "react";
import createCtx from "../../../utilities/createCtx";

const AppBarTitleContext = createContext<string>("");
AppBarTitleContext.displayName = "AppBarTitleContext";

const [useSetAppBarTitleContext, SetAppBarTitleContextProvider] = createCtx<
  React.Dispatch<React.SetStateAction<string>>
>("SetAppBarTitleContextProvider");

const AppBarTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");

  return (
    <AppBarTitleContext.Provider value={title}>
      <SetAppBarTitleContextProvider value={setTitle}>
        {children}
      </SetAppBarTitleContextProvider>
    </AppBarTitleContext.Provider>
  );
};

export { AppBarTitleContext, useSetAppBarTitleContext };
export default AppBarTitleProvider;
