import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userLogin } from "../apis/auth";
import { get_profile } from "../apis/user";

export default function Login() {
  // const [user, setUser] = useState([]);
  // const [profile, setProfile] = useState([]);

  // useEffect(() => {
  //   profileMe();
  // }, [user]);
  // async function profileMe() {
  //   if (user) {
  //     await axios
  //       .post("https://backend.codingclubtkmce.tech/users/google/", {
  //         access_token: user.access_token,
  //         code: "200",
  //       })
  //       .then((res) => {
  //         // setProfile(res.data);
  //         console.log(res);
  //       });
  //   }
  // }

  const handleLogin = async(credentaialResponse) => {
    const response = await userLogin(credentaialResponse.access_token);
    if(response.status === 200) {
      //set the token to the token context here
      const profile_response = await get_profile(response.response.key);
      console.log(profile_response);
      //set profile to context
      //set key to local storage
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleLogin,
    onError: (error) => console.log("Login Failed:", error),
  });

  // const logout = () => {
  //   googleLogout();
  //   setProfile(null);
  // };
  // if (!profile.name) {
    return (
      <div className="bg-white text-black px-3 rounded h-8 flex justify-center items-center">
        <button onClick={() => login()}>LogIn</button>
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //       <Link to={"/profile"}>Profile</Link>
  //     </div>
  //   );
  // }
}
