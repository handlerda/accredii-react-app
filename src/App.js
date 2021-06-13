import "./assets/main.css";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LawfirmAppContainer from "./Lawfirm/LawfirmAppContainer";
import InvestorAppContainer from "./Investor/InvestorAppContainer";
import CompanyAppContainer from "./Company/CompanyAppContainer";
import Admin from "./Admin/Admin";
const investor_auth0_domain = process.env.REACT_APP_AUTH_0_DOMAIN;
const investor_auth0_client_id = process.env.REACT_APP_INVESTOR_AUTH0_CLIENT_ID;
const firm_auth0_client_id = process.env.REACT_APP_FIRM_AUTH0_CLIENT_ID;
const company_auth0_client_id = process.env.REACT_APP_COMPANY_AUTH0_CLIENT_ID;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/investor">
          <Auth0Provider
            domain={investor_auth0_domain}
            clientId={investor_auth0_client_id}
            redirectUri={window.location.origin + `/investor`}
          >
            <InvestorAppContainer />
          </Auth0Provider>
        </Route>
        <Route path="/attorney">
          <Auth0Provider
            domain={investor_auth0_domain}
            clientId={firm_auth0_client_id}
            redirectUri={window.location.origin + `/attorney`}
          >
            <LawfirmAppContainer />
          </Auth0Provider>
        </Route>
        <Route path="/company">
          {console.log(company_auth0_client_id)}
          <Auth0Provider
            domain={investor_auth0_domain}
            clientId={company_auth0_client_id}
            redirectUri={window.location.origin + `/company`}
          >
            <CompanyAppContainer />
          </Auth0Provider>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
