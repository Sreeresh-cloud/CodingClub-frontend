import { useGoogleLogin } from "@react-oauth/google";
import { userLogin } from "../apis/auth";
import { get_profile } from "../apis/user";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";

export default function Login({setVisible}) {
  const { tokenState, userState } = useContext(UserContext);
  const [token, setToken] = tokenState;
  const [userDetails, setUserDetails] = userState;

  const {showToast} = useContext(ToastContext);

  const handleLogin = async(credentaialResponse) => {
    const response = await userLogin(credentaialResponse.access_token);
    if(response.status === 200) {
      setToken(response.response.key);
      const profile_response = await get_profile(response.response.key);
      if(profile_response.status === 200) {
        localStorage.setItem("CCUserToken",response.response.key);
        setUserDetails({...profile_response.response});
        showToast('success','Success','Login Successful');
        setVisible && setVisible();
      }
      else {
        showToast('error','Error','Login Error');
        setVisible && setVisible();
      }
    }
    else {
      showToast('error','Error','Login Error');
      setVisible && setVisible();
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleLogin,
    onError: (error) => {
      console.log("Login Failed:", error);
      showToast('error','Error','Login Error');
      setVisible && setVisible();
    },
  });

  return (
    <div className="bg-white text-black px-3 rounded h-8 flex justify-center items-center">
      <button onClick={() => login()}>LogIn</button>
    </div>
  );
}
