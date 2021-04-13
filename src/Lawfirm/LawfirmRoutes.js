import React from "react";
import { Switch, Route, useHistory } from "react-router";
import NewButton from "../Components/Controls/NewButton";
import Documents from "../Components/Portal/Documents/DocumentGrid";
import DocumentSignContainer from "../Components/Portal/Documents/DocumentSignContainer";
import Report from "../Components/Portal/Report";
import NewClient from "./Clients/NewClient";
import CompanyList from "./Companies/CompanyList";
import NewCompany from "./Companies/NewCompany";
import NewDocument from "./Documents/NewDocument";
import { useAuth0 } from "@auth0/auth0-react";

const tableHeaders = [
  { name: "Title" },
  { name: "Company" },
  { name: "Law Firm" },
  { name: "Client" },
  { name: "Status" },
  { name: "Action" },
];

const api_names = [
  "title",
  "company_name",
  "lawfirm_name",
  "investor_name",
  "status",
  "sign",
];
function LawfirmRoutes() {
  // const { user } = useAuth0();
  const user = {};
  user.sub = "848290340";
  const history = useHistory();
  return (
    <Switch>
      <Route exact path={`/attorney/documents`}>
        <NewButton
          text="New Document"
          onClick={() => history.push(`/attorney/documents/new`)}
        ></NewButton>
        <Documents type="attorney" id={user.sub}></Documents>
      </Route>
      <Route exact path={`/attorney/documents/new`}>
        <NewDocument />
      </Route>
      <Route path={`/attorney/documents/sign/:documentId`}>
        <DocumentSignContainer type="attorney" user_id={user.sub} />
        <div id="hello-sign-container"></div>
      </Route>
      <Route path={`/attorney/documents/:documentId`}>
        <h1>Hello world from doc id</h1>
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
        <NewButton
          text="New Client"
          onClick={() => history.push(`/attorney/clients/new`)}
        ></NewButton>
        <h1>Hello from clients</h1>
      </Route>
      <Route exact path={`/attorney/clients/new`}>
        <NewClient attorney_id={user.sub} lawfirm_id="auth0|39420394" />
      </Route>
      <Route path={`/attorney/clients/:id`}>
        <h1>Hello from a client id </h1>
      </Route>
      <Route exact path={`/attorney/companies`}>
        <NewButton
          text="New Company"
          onClick={() => history.push(`/attorney/companies/new`)}
        ></NewButton>
        {console.log(user.sub)}
        <CompanyList type="attorney" id={user.sub} />
      </Route>
      <Route exact path={`/attorney/companies/new`}>
        {console.log(user)}
        <NewCompany attorney_id={user.sub} lawfirm_id="auth0|39420394" />
      </Route>
      <Route path={`/attorney/companies/:id`}>
        <h1>Hello from client id </h1>
      </Route>
    </Switch>
  );
}

export default LawfirmRoutes;
