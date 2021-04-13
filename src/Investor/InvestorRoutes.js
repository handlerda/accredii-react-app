import React from "react";
import { Switch, Route, useHistory } from "react-router";
import NewButton from "../Components/Controls/NewButton";
import Company from "../Components/Portal/Company";
import Documents from "../Components/Portal/Documents/DocumentGrid";
import DocumentSignContainer from "../Components/Portal/Documents/DocumentSignContainer";
import Report from "../Components/Portal/Report";
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

function InvestorRoutes() {
  const history = useHistory();
  return (
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
      <Route path={`/investor/documents/sign/:documentId`}>
        <DocumentSignContainer
          type="investor"
          user_id="auth0|60688e791549f20070e6281a"
        />
        <div id="hello-sign-container"></div>
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
          content="docs"
        />
      </Route>
      <Route exact path={`/investor/info`}>
        <MyInfo />
      </Route>
      <Route exact path={`/investor/companies`}>
        <Company />
      </Route>
    </Switch>
  );
}

export default InvestorRoutes;
