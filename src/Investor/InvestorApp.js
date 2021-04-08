import React, { useState } from "react";
import Container from "../Navbar.js/Container";
import Items from "../Navbar.js/Items";
import MobileContainer from "../Navbar.js/Mobile/MobileContainer";
import MobileItems from "../Navbar.js/Mobile/MobileItems";

import Report from "../Components/Portal/Report";
import Company from "../Components/Portal/Company";
import Documents from "../Components/Portal/Documents/DocumentGrid";
import NewButton from "../Components/Controls/NewButton";
import { Switch, Route, useHistory } from "react-router";
import MyInfo from "./MyInfo";

const tableHeaders = [
  { name: "Title" },
  { name: "Company" },
  { name: "Law Firm" },
  { name: "Attorney" },
  { name: "Status" },
  { name: "Action" },
];

const api_names = [
  "title",
  "company_name",
  "lawfirm_name",
  "attorney_name",
  "status",
  "sign",
];

function InvestorApp() {
  const history = useHistory();

  return (
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
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome Name
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Switch>
                <Route exact path={`/investor/documents`}>
                  <NewButton
                    text="New Document"
                    onClick={() => history.push(`/investor/documents/new`)}
                  ></NewButton>
                  <Documents
                    type="investor"
                    id="auth0|60688e791549f20070e6281a"
                  ></Documents>
                </Route>
                <Route exact path={`/investor/documents/new`}>
                  <h1>Hello from new doc</h1>
                </Route>
                <Route path={`/investor/documents/:documentId`}>
                  <h1>Hello from doc id</h1>
                </Route>

                <Route exact path={`/investor/reports`}>
                  <Report
                    tableHeaders={tableHeaders}
                    type="investor"
                    id="auth0|60688e791549f20070e6281a"
                    keys={api_names}
                  />
                </Route>
                <Route exact path={`/investor/info`}>
                  <MyInfo />
                </Route>
                <Route exact path={`/investor/companies`}>
                  <Company />
                </Route>
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InvestorApp;
