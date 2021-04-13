import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LawfirmApp from "./LawfirmApp";

function LawfirmAppContainer() {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
    loginWithRedirect,
    user,
  } = useAuth0();

  useEffect(() => {
    //async function to call the redirect
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect();
      }
    })();
  }, [isLoading]);

  return <div>{isAuthenticated && <LawfirmApp />}</div>;
}

export default LawfirmAppContainer;
