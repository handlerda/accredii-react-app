import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../Components/Dashboard/Searchbar";
import Container from "../Navbar.js/Container";
import Items from "../Navbar.js/Items";
import MobileContainer from "../Navbar.js/Mobile/MobileContainer";
import MobileItems from "../Navbar.js/Mobile/MobileItems";
import { getDocuments } from "../Service/Backend";
import attorneyReducer, {
  getAttorneyInfo,
  getAttorneyStatus,
} from "../store/attorney";
import LawfirmRoutes from "./LawfirmRoutes";
import { useAuth0 } from "@auth0/auth0-react";

function LawfirmApp() {
  const { logout, user, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const attorney = useSelector((state) => state.attorney);
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getStatus = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "https://accredii.com/authorization",
        scope: "attorney:all",
      });

      const documentStatus = await dispatch(
        getAttorneyStatus(user.sub, accessToken)
      );
      if (documentStatus === 200) {
        setCurrentUser(true);
        setLoaded(true);
      } else {
        setCurrentUser(false);
      }
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
          <MobileItems label="Dashboard" link="/attorney" />
          <MobileItems label="Clients" link="/attorney/clients" />
          <MobileItems label="Companies" link="/attorney/companies" />
          <MobileItems label="Documents" link="/attorney/documents" />
          <MobileItems label="Reports" link="/attorney/reports" />
        </MobileContainer>

        {/* <!-- Static sidebar for desktop --> */}
        <Container img="https://media-exp1.licdn.com/dms/image/C4E03AQGLtyzMNWNkjQ/profile-displayphoto-shrink_200_200/0/1516353342859?e=1626307200&v=beta&t=GeoaTf5EGTnTQsCZc48Phjv5hsywtWoXObI9UF4aatY">
          <Items label="Dashboard" link="/attorney" />
          <Items label="Clients" link="/attorney/clients" />
          <Items label="Companies" link="/attorney/companies" />
          <Items label="Documents" link="/attorney/documents" />
          <Items label="Reports" link="/attorney/reports" />
          <Items label="Logout" link="/attorney/logout" />
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
              <Searchbar type="attorney" name={attorney.status.name} />
            </div>

            <div className="py-1 ">
              <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 ">
                <LawfirmRoutes />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  );
}

export default LawfirmApp;
