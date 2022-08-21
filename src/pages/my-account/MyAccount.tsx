import useUpdateAppBarTitle from "../../components/appbar/title-provider/useUpdateAppBarTitle";
import UnderConstruction from "../../components/under-construction/UnderConstruction";
import { MY_ACCOUNT_ROUTE } from "../../routes/myAccountRoute";

const MyAccount = () => {
  useUpdateAppBarTitle(MY_ACCOUNT_ROUTE.text);

  return <UnderConstruction />;
};

export default MyAccount;
