import React, { useEffect, useState } from "react";
import Container from "../Navbar.js/Container";
import Items from "../Navbar.js/Items";
import MobileContainer from "../Navbar.js/Mobile/MobileContainer";
import MobileItems from "../Navbar.js/Mobile/MobileItems";
import CompanyRoutes from "./CompanyRoutes";
import { useAuth0 } from "@auth0/auth0-react";
import { getDocuments } from "../Service/Backend";
import Searchbar from "../Components/Dashboard/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyStatus } from "../store/company";

function CompanyApp() {
  const { user, logout } = useAuth0();
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company.status);
  const [loaded, setLoaded] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await dispatch(getCompanyStatus(user.sub));
      if (!data.error) setLoaded(true);
      if (data.error) setCurrentUser(false);
      return data;
    };
    getStatus();
  }, [dispatch]);

  if (currentUser === false) {
    logout();
    return <h1>You are not a valid company</h1>;
  }

  return (
    loaded && (
      <div className="h-screen flex overflow-hidden bg-white">
        <MobileContainer>
          <MobileItems label="Dashboard" link="/company" />
          <MobileItems label="Investors" link="/company/investors" />
          <MobileItems label="Documents" link="/company/documents" />
          <MobileItems label="Reports" link="/company/reports" />
        </MobileContainer>

        {/* <!-- Static sidebar for desktop --> */}
        <Container img="https://static01.nyt.com/images/2019/05/02/fashion/02JACK-1/02JACK-1-superJumbo.jpg?quality=90&auto=webp">
          <Items label="Dashboard" link="/company" />
          <Items label="Investors" link="/company/investors" />
          <Items label="Documents" link="/company/documents" />
          <Items label="Reports" link="/company/reports" />
          <Items label="Logout" link="/company/logout" />
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
              <Searchbar name={data.name} type="company" />
            </div>

            <div className="py-1 ">
              <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 ">
                <CompanyRoutes />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  );
}

export default CompanyApp;
