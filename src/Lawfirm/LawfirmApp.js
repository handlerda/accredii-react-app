import React, { useState } from "react";
import Container from "../Navbar.js/Container";
import Items from "../Navbar.js/Items";
import MobileContainer from "../Navbar.js/Mobile/MobileContainer";
import Report from "../../src/Components/Portal/Report";
import MobileItems from "../Navbar.js/Mobile/MobileItems";
import Documents from "../Components/Portal/Documents/DocumentGrid";
import { Route, Switch, useHistory } from "react-router";
import NewButton from "../Components/Controls/NewButton";

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

function LawfirmApp() {
  const history = useHistory();

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <MobileContainer>
        <MobileItems label="Dashboard" link="/attorney" />
        <MobileItems label="Clients" link="/attorney/clients" />
        <MobileItems label="Companies" link="/attorney/companies" />
        <MobileItems label="Documents" link="/attorney/documents" />
        <MobileItems label="Reports" link="/attorney/reports" />
      </MobileContainer>

      {/* <!-- Static sidebar for desktop --> */}
      <Container>
        <Items label="Dashboard" link="/attorney" />
        <Items label="Clients" link="/attorney/clients" />
        <Items label="Companies" link="/attorney/companies" />
        <Items label="Documents" link="/attorney/documents" />
        <Items label="Reports" link="/attorney/reports" />
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
                <Route exact path={`/attorney/documents`}>
                  <NewButton
                    text="New Document"
                    onClick={() => history.push(`/attorney/documents/new`)}
                  ></NewButton>
                  <Documents type="attorney" id="848290340"></Documents>
                </Route>
                <Route exact path={`/attorney/documents/new`}>
                  <h1>Hello from new doc</h1>
                </Route>
                <Route path={`/attorney/documents/:documentId`}>
                  <h1>Hello world from doc id</h1>
                </Route>
                <Route path="/attorney/reports">
                  <Report
                    tableHeaders={tableHeaders}
                    type="attorney"
                    id="848290340"
                    keys={api_names}
                  />
                </Route>
                <Route exact path={`/attorney/clients`}>
                  <NewButton
                    text="New Client"
                    onClick={() => history.push(`/attorney/clients/new`)}
                  ></NewButton>
                  <h1>Hello from clients</h1>
                </Route>
                <Route exact path={`/attorney/clients/new`}>
                  <h1>Hello from a new client </h1>
                </Route>
                <Route path={`/attorney/clients/:id`}>
                  <h1>Hello from a client id </h1>
                </Route>
                <Route path={`/attorney/companies`}>
                  <NewButton
                    text="New Company"
                    onClick={() => history.push(`/attorney/companies/new`)}
                  ></NewButton>
                </Route>
                <Route exact path={`/attorney/companies/new`}>
                  <h1>Hello from a new company </h1>
                </Route>
                <Route path={`/attorney/companies/:id`}>
                  <h1>Hello from client id </h1>
                </Route>
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LawfirmApp;
