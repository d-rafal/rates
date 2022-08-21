import { createContext, useState } from "react";
import createCtx from "../../../utilities/createCtx";

const IsNavDrawerOpenContext = createContext<boolean>(false);
IsNavDrawerOpenContext.displayName = "IsNavDrawerOpenContext";

const [useSetNavDrawerOpen, SetNavDrawerOpenContextProvider] = createCtx<
  React.Dispatch<React.SetStateAction<boolean>>
>("SetNavDrawerOpenContextProvider");

const NavDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  return (
    <IsNavDrawerOpenContext.Provider value={navDrawerOpen}>
      <SetNavDrawerOpenContextProvider value={setNavDrawerOpen}>
        {children}
      </SetNavDrawerOpenContextProvider>
    </IsNavDrawerOpenContext.Provider>
  );
};

export default NavDrawerProvider;

export { useSetNavDrawerOpen, IsNavDrawerOpenContext };
