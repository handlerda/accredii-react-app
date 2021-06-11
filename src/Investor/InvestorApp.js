import React, { useState, useEffect } from "react";
import Container from "../Navbar.js/Container";
import Items from "../Navbar.js/Items";
import MobileContainer from "../Navbar.js/Mobile/MobileContainer";
import MobileItems from "../Navbar.js/Mobile/MobileItems";
import { useAuth0 } from "@auth0/auth0-react";
import InvestorRoutes from "./InvestorRoutes";
import Searchbar from "../Components/Dashboard/Searchbar";
import { getDocuments } from "../Service/Backend";
import { useDispatch, useSelector } from "react-redux";
import { getInvestorStatus } from "../store/investor";

function InvestorApp() {
  const { isAuthenticated, isLoading, loginWithRedirect, user, logout } =
    useAuth0();
  console.log(user);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const investor = useSelector((state) => state.investor.status);
  console.log(investor);
  useEffect(() => {
    const getStatus = async () => {
      const data = await dispatch(getInvestorStatus(user.sub));
      if (!data.error) setLoaded(true);
      if (data.error) setCurrentUser(false);
      return data;
    };
    getStatus();
  }, [dispatch]);

  if (currentUser === false) {
    logout();
    return <h1>You are not a valid user</h1>;
  }
  if (!loaded) {
    return <h1>loading</h1>;
  }

  return (
    loaded && (
      <div className="h-screen flex overflow-hidden bg-white">
        <MobileContainer>
          <MobileItems label="Dashboard" link="/investor" />
          <MobileItems label="Companies" link="/investor/companies" />
          <MobileItems label="My Info" link="/investor/info" />
          <MobileItems label="Documents" link="/investor/documents" />
          <MobileItems label="Reports" link="/investor/reports" />
        </MobileContainer>

        {/* <!-- Static sidebar for desktop --> */}
        <Container>
          <Items label="Dashboard" link="/investor" />
          <Items label="Companies" link="/investor/companies" />
          <Items label="My Info" link="/investor/info" />
          <Items label="Documents" link="/investor/documents" />
          <Items label="Reports" link="/investor/reports" />
          <Items label="Logout" link="/investor/logout" />
        </Container>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open sidebar</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100"
            tabIndex="0"
          >
            <div className="bg-white">
              <Searchbar type="investor" name={investor.name} />
            </div>

            <div className="py-1 ">
              <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 ">
                <InvestorRoutes />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  );
}

export default InvestorApp;
