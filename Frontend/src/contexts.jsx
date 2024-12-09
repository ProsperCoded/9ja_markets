import { createContext } from "react";
import LoginModal from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./componets-utils/LogoutModal";
import { message } from "antd";
import { useEffect, useState } from "react";
// Contexts
export const USER_PROFILE_CONTEXT = createContext({
  userProfile: null,
  setUserProfile: () => {},
});
export const MESSAGE_API_CONTEXT = createContext({
  success: (content) => {},
  error: (content) => {},
  info: (content) => {},
  warning: (content) => {},
});
export const LOGOUT_MODAL_CONTEXT = createContext({
  logoutOpen: false,
  setLogoutOpen: () => {},
});
export const LOGIN_MODAL_CONTEXT = createContext({
  loginOpen: false,
  setLoginOpen: () => {},
});
export const SIGNUP_MODAL_CONTEXT = createContext({
  signupOpen: false,
  setSignupOpen: () => {},
});

export function ContextWrapper({ children }) {
  const [userProfile, setUserProfile] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);
  return (
    <>
      <USER_PROFILE_CONTEXT.Provider value={{ userProfile, setUserProfile }}>
        <MESSAGE_API_CONTEXT.Provider value={messageApi}>
          <LOGIN_MODAL_CONTEXT.Provider value={{ loginOpen, setLoginOpen }}>
            <SIGNUP_MODAL_CONTEXT.Provider
              value={{ signupOpen, setSignupOpen }}
            >
              <LOGOUT_MODAL_CONTEXT.Provider
                value={{ logoutOpen, setLogoutOpen }}
              >
                <Logout logoutOpen={logoutOpen} setLogoutOpen={setLogoutOpen} />
                {contextHolder}
                {children}
                <LoginModal />
                <Signup />
              </LOGOUT_MODAL_CONTEXT.Provider>
            </SIGNUP_MODAL_CONTEXT.Provider>
          </LOGIN_MODAL_CONTEXT.Provider>
        </MESSAGE_API_CONTEXT.Provider>
      </USER_PROFILE_CONTEXT.Provider>
    </>
  );
}
