import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import InvestorApp from "./InvestorApp";

function InvestorAppContainer() {
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    //async function to call the redirect
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect();
      }
    })();
  }, [isLoading]);

  return <div>{isAuthenticated && <InvestorApp />}</div>;
}

export default InvestorAppContainer;
