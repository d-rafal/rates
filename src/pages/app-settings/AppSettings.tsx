import useUpdateAppBarTitle from "../../components/appbar/title-provider/useUpdateAppBarTitle";
import UnderConstruction from "../../components/under-construction/UnderConstruction";
import { SETTINGS_ROUTE } from "../../routes/settingsRoute";

const AppSettings = () => {
  useUpdateAppBarTitle(SETTINGS_ROUTE.text);

  return <UnderConstruction />;
};

export default AppSettings;
