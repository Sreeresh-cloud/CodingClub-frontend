import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate();

    const { userState, tokenState } = useContext(UserContext);
    const [userDetails, setUserDetails] = userState;
    const [token, setToken] = tokenState;

    const handleLogout = async () => {
        googleLogout();
        localStorage.setItem('CCUserToken',"");
        setUserDetails(null);
        setToken("");
        navigate("/");
    };

    return(
        <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
            {userDetails ? 
            (
                <div>{userDetails.name},{userDetails.email}</div>
            )
            :
            (
                <div>Please log in</div>
            )
            }
            {userDetails && <button className="py-2 px-2 rounded-lg bg-white text-black" onClick={handleLogout}>Logout</button>}
        </div>
    );
}