import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    profileMe();
  }, [user]);
  async function profileMe() {
    if (user) {
      await axios
        .get(
          "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" +
            user.access_token,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log(profile);
        });
    }
  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const logout = () => {
    googleLogout();
    setProfile(null);
  };
  if (!profile.name) {
    return (
      <div className="bg-white text-black px-3 rounded">
        <button onClick={() => login()}>LogIn</button>
      </div>
    );
  } else {
    return (
      <div >
        <Link to={"/profile"}>
          <img className="w-16 rounded-full" src={profile.picture} />
        </Link>
      </div>
    );
  }
}
