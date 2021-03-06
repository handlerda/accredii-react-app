import React from "react";
import { Route, Switch } from "react-router-dom";
import FormHeader from "../Components/Form/FormHeader";
import Container from "../Navbar.js/Container";
import Items from "../Navbar.js/Items";
import MobileContainer from "../Navbar.js/Mobile/MobileContainer";
import MobileItems from "../Navbar.js/Mobile/MobileItems";
import NewAttorney from "./NewAttorney";
import NewLawfirm from "./NewLawfirm";

function AdminApp() {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <MobileContainer>
        <MobileItems label="Dashboard" link="/admin" />
        <MobileItems label="New Lawfirm" link="/admin/lawfirm/new" />
        <MobileItems label="New Lawfirm" link="/admin/attorney/new" />
      </MobileContainer>

      {/* <!-- Static sidebar for desktop --> */}
      <Container img="https://media-exp1.licdn.com/dms/image/C4E03AQGLtyzMNWNkjQ/profile-displayphoto-shrink_200_200/0/1516353342859?e=1626307200&v=beta&t=GeoaTf5EGTnTQsCZc48Phjv5hsywtWoXObI9UF4aatY">
        <Items label="Dashboard" link="/admin" />
        <Items label="New Lawfirm" link="/admin/lawfirm/new" />
        <Items label="New Attorney" link="/admin/attorney/new" />
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
            {/* <Searchbar type="attorney" name={attorney.status.name} /> */}
          </div>

          <div className="py-1 ">
            <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 ">
              <Switch>
                <Route exact path={`/admin/lawfirm/new`}>
                  <FormHeader
                    header="New Lawfirm"
                    body="Add a new lawfirm to the database"
                  />
                  <div className="pt-15">
                    <NewLawfirm />
                  </div>
                </Route>
                <Route exact path={`/admin/attorney/new`}>
                  <FormHeader
                    header="New Attorney"
                    body="Add a new lawfirm to the database"
                  />
                  <div className="pt-15">
                    <NewAttorney />
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminApp;
