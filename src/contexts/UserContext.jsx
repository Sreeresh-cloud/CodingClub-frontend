import React,{useState, createContext} from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  return (
    <UserContext.Provider
      value={{
        tokenState:[token,setToken],
        userState:[userDetails, setUserDetails]
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
