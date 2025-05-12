import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "../store/store";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { userActions } from "../store/userSlice";

const useAuth = () => {
    const user = useSelector((state: TRootState) => state.userSlice.user);
    const dispatch = useDispatch();

    const login = async (form: { email: string, password: string }) => {
        try {
            const token = await axios.post(
                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
                form,
            );
            console.log(token.data);
            localStorage.setItem("token", token.data);
            toast.success("Sign In Successful");

            // parser token with atob
            //const parsedToken = JSON.parse(atob(token.data.split(".")[1]));

            const parsedToken = jwtDecode(token.data) as {
                _id: string;
            };
            console.log(parsedToken);

            // get user data from token & set it in headers
            axios.defaults.headers.common["x-auth-token"] = token.data;

            // get user data from api
            const res = await axios.get(
                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" +
                parsedToken._id,
            );

            // update user data in redux store
            dispatch(userActions.login(res.data));
        } catch (error) {
            console.log(error);
            toast.error("Sign In Failed");
        }
    };

    return { user, login }
};

export default useAuth;