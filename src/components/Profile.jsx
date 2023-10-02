import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Profile() {

    const {userState} = useContext(UserContext);
    const [userDetails,setUserDetails] = userState;

    return(
        <div>
            {userDetails ? 
            (
                <div>{userDetails.name},{userDetails.email}</div>
            )
            :
            (
                <div>Please log in</div>
            )
        }
        </div>
    );
}