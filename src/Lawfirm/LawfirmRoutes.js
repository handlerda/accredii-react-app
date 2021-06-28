import React from "react";
import { Switch, Route, useHistory } from "react-router";
import NewButton from "../Components/Controls/NewButton";
import Documents from "../Components/AppComponents/Documents/DocumentGrid";
import DocumentSignContainer from "../Components/AppComponents/Documents/DocumentSignContainer";
import Report from "../Components/AppComponents/Report";
import NewClient from "./Clients/NewClient";
import CompanyList from "./Companies/CompanyList";
import NewCompany from "./Companies/NewCompany";
import NewDocument from "./Documents/NewDocument";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "../Components/Dashboard/Dashboard";
import Popup from "../Components/Popup";
import Details from "../Components/Documents/Details";
import FormHeader from "../Components/Form/FormHeader";

const tableHeaders = [
  { name: "Title" },
  { name: "Company" },
  { name: "Law Firm" },
  { name: "Client" },
  { name: "Status" },
];

const api_names = [
  "title",
  "company_name",
  "lawfirm_name",
  "investor_name",
  "status",
];
function LawfirmRoutes() {
  const { logout, user } = useAuth0();
  const history = useHistory();

  return (
    <Switch>
      <Route exact path={`/attorney`}>
        <Dashboard type="attorney" user_id={user.sub} />
      </Route>
      <Route exact path={`/attorney/documents`}>
        <FormHeader
          header="Document Overview"
          body="View document status or click the green button to send a new document an investor"
        />
        <NewButton
          text="New Document"
          onClick={() => history.push(`/attorney/documents/new`)}
        ></NewButton>

        <Documents type="attorney" id={user.sub}></Documents>
      </Route>
      <Route exact path={`/attorney/documents/new`}>
        <NewDocument id={user.sub} />
      </Route>
      <Route path={`/attorney/documents/sign/:documentId`}>
        <DocumentSignContainer type="attorney" user_id={user.sub} />
        <div id="hello-sign-container"></div>
      </Route>
      <Route path={`/attorney/documents/:documentId`}>
        <Details type="attorney" />
      </Route>
      <Route path="/attorney/reports">
        <Report
          tableHeaders={tableHeaders}
          type="attorney"
          id={user.sub}
          keys={api_names}
          content="docs"
        />
      </Route>
      <Route exact path={`/attorney/clients`}>
        <NewClient attorney_id={user.sub} lawfirm_id="auth0|39420394" />
      </Route>
      <Route path={`/attorney/clients/:id`}>
        <h1>Hello from a client id </h1>
      </Route>
      <Route exact path={`/attorney/companies`}>
        <CompanyList type="attorney" id={user.sub} />
      </Route>
      <Route exact path={`/attorney/companies/new`}>
        <NewCompany attorney_id={user.sub} lawfirm_id="auth0|39420394" />
      </Route>
      <Route path={`/attorney/companies/:id`}>
        <h1>Hello from client id </h1>
      </Route>
      <Route exact path={`/attorney/logout`}>
        <Popup
          title="Are you sure you want to logout"
          text="Your data will be cleared from your browser"
          buttonText="Yes"
          handleClick={() => logout({ returnTo: window.location.origin })}
        />
      </Route>
    </Switch>
  );
}

export default LawfirmRoutes;
