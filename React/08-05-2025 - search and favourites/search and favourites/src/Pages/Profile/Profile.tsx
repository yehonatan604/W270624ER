import { useSelector } from "react-redux";
import { TRootState } from "../../store/store";

const Profile = () => {
  const user = useSelector((state: TRootState) => state.userSlice.user);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-2">
      <h1 className="text-2xl">Profile Page</h1>
      <p className="text-lg dark:text-white">
        Welcome User: {user?.name.first}
      </p>
    </div>
  );
};

export default Profile;
