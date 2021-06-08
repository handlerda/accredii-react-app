import React from "react";
import { Switch, Route, useHistory } from "react-router";
import NewButton from "../Components/Controls/NewButton";
import Documents from "../Components/AppComponents/Documents/DocumentGrid";
import DocumentSignContainer from "../Components/AppComponents/Documents/DocumentSignContainer";
import Report from "../Components/AppComponents/Report";
import MyInfo from "./MyInfo";
import { useAuth0 } from "@auth0/auth0-react";
import Popup from "../Components/Popup";
import Dashboard from "../Components/Dashboard/Dashboard";
import Details from "../Components/Documents/Details";
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
  const { user, logout } = useAuth0();
  return (
    <Switch>
      <Route exact path={`/investor`}>
        <Dashboard user_id={user.sub} type="investor" />
      </Route>
      <Route exact path={`/investor/documents`}>
        <NewButton
          text="New Document"
          onClick={() => history.push(`/investor/documents/new`)}
        ></NewButton>
        <Documents type="investor" id={user.sub}></Documents>
      </Route>
      <Route exact path={`/investor/documents/new`}>
        <Popup
          title="We are still working on this page"
          text="Check out some of our other pages"
          buttonText="Take me to documents"
          handleClick={() => history.push(`/investor/documents`)}
        />
      </Route>
      <Route path={`/investor/documents/sign/:documentId`}>
        <DocumentSignContainer type="investor" user_id={user.sub} />
        <div id="hello-sign-container"></div>
      </Route>
      <Route path={`/investor/documents/:documentId`}>
        <Details type="investor" />
      </Route>

      <Route exact path={`/investor/reports`}>
        <Report
          tableHeaders={tableHeaders}
          type="investor"
          id={user.sub}
          keys={api_names}
          content="docs"
        />
      </Route>
      <Route exact path={`/investor/info`}>
        <MyInfo id={user.sub} />
      </Route>
      <Route exact path={`/investor/companies`}>
        <Popup
          title="We are still working on this page"
          text="Check out some of our other pages"
          buttonText="Take me to documents"
          handleClick={() => history.push(`/investor/documents`)}
        />
      </Route>
      <Route exact path={`/investor/logout`}>
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

export default InvestorRoutes;
