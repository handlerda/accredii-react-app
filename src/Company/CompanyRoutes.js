import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Switch, useHistory } from "react-router";
import NoData from "../Components/NoData";
import NewButton from "../Components/Controls/NewButton";
import Documents from "../Components/Portal/Documents/DocumentGrid";
import DocumentSignContainer from "../Components/Portal/Documents/DocumentSignContainer";
import Report from "../Components/Portal/Report";
import MyInfo from "../Investor/MyInfo";

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

function CompanyRoutes() {
  const history = useHistory();
  const { user, logout } = useAuth0();
  console.log(user);
  return (
    <Switch>
      <Route exact path={`/company`}>
        <NoData
          title="We are still working on this page"
          text="Check out some of our other pages"
          buttonText="Take me to documents"
          handleClick={() => history.push(`/company/documents`)}
        />
      </Route>
      <Route exact path={`/company/documents`}>
        <NewButton
          text="New Document"
          onClick={() => history.push(`/company/documents/new`)}
        ></NewButton>
        <Documents type="company" id={user.sub}></Documents>
      </Route>
      <Route exact path={`/company/documents/new`}>
        <NoData
          title="We are still working on this page"
          text="Check out some of our other pages"
          buttonText="Take me to documents"
          handleClick={() => history.push(`/company/documents`)}
        />
      </Route>
      <Route path={`/company/documents/sign/:documentId`}>
        <DocumentSignContainer type="company" user_id={user.sub} />
        <div id="hello-sign-container"></div>
      </Route>
      <Route path={`/company/documents/:documentId`}>
        <NoData
          title="We are still working on this page"
          text="Check out some of our other pages"
          buttonText="Take me to documents"
          handleClick={() => history.push(`/company/documents`)}
        />
      </Route>

      <Route exact path={`/company/reports`}>
        <Report
          tableHeaders={tableHeaders}
          type="investor"
          id={user.sub}
          keys={api_names}
          content="docs"
        />
      </Route>
      <Route exact path={`/company/info`}>
        <MyInfo id={user.sub} />
      </Route>
      <Route exact path={`/company/investors`}>
        <NoData
          title="We are still working on this page"
          text="Check out some of our other pages"
          buttonText="Take me to documents"
          handleClick={() => history.push(`/company/documents`)}
        />
      </Route>
      <Route exact path={`/company/logout`}>
        <NoData
          title="Are you sure you want to logout"
          text="Your data will be cleared from your browser"
          buttonText="Yes"
          handleClick={() => logout({ returnTo: window.location.origin })}
        />
      </Route>
    </Switch>
  );
}

export default CompanyRoutes;
