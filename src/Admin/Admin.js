import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminApp from "./AdminApp";
import Login from "./Components/Login";

function Admin() {
  // handle login status
  // with a use effect
  const [loggedIn, setLogin] = useState(false);
  //   let loggedIn = false;
  //   function handleClick() {
  //     console.log(`click`);
  //     loggedIn = true;
  //   }

  switch (loggedIn) {
    case false:
      return <Login onClick={() => setLogin(true)} />;
    case true:
      return <AdminApp />;

    default:
      break;
  }
}

export default Admin;
