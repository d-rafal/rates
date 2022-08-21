import useUpdateAppBarTitle from "../../components/appbar/title-provider/useUpdateAppBarTitle";
import UnderConstruction from "../../components/under-construction/UnderConstruction";
import { PROFILE_ROUTE } from "../../routes/profileRoute";

const Profile = () => {
  useUpdateAppBarTitle(PROFILE_ROUTE.text);

  return <UnderConstruction />;
};

export default Profile;
