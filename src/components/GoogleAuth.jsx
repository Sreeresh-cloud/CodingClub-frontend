import { useGoogleLogin } from "@react-oauth/google";
import { userLogin } from "../apis/auth";
import { get_profile } from "../apis/user";
import { UserContext } from "../contexts/UserContext";
import { useContext, useRef } from "react";
import { Toast } from "primereact/toast";

export default function Login() {
  const { tokenState, userState } = useContext(UserContext);
  const [token, setToken] = tokenState;
  const [userDetails, setUserDetails] = userState;

  const handleLogin = async(credentaialResponse) => {
    const response = await userLogin(credentaialResponse.access_token);
    if(response.status === 200) {
      setToken(response.response.key);
      const profile_response = await get_profile(response.response.key);
      if(profile_response.status === 200) {
        localStorage.setItem("CCUserToken",response.response.key);
        setUserDetails({...profile_response.response});
        showSuccess();
      }
      else {
        showError();
      }
    }
    else {
      showError();
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleLogin,
    onError: (error) => {
      console.log("Login Failed:", error);
      showError();
    },
  });

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Login Successful', life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Login Error', life: 3000});
  }

  return (
    <div className="bg-white text-black px-3 rounded h-8 flex justify-center items-center">
      <Toast ref={toast} position="bottom-center"/>
      <button onClick={() => login()}>LogIn</button>
    </div>
  );
}
