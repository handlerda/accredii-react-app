import "./assets/main.css";
import LandingPage from "./LandingPage/LandingPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import InvestorApp from "./Investor/InvestorApp";
import LawfirmApp from "./Lawfirm/LawfirmApp";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
const investor_auth0_domain = process.env.REACT_APP_AUTH_0_DOMAIN;
const investor_auth0_client_id = process.env.REACT_APP_INVESTOR_AUTH0_CLIENT_ID;
const firm_auth0_client_id = process.env.REACT_APP_FIRM_AUTH0_CLIENT_ID;

function App() {
  const { loginWithRedirect } = useAuth0();
  // const history = useHistory();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/investor">
          <Auth0Provider
            domain={investor_auth0_domain}
            clientId={investor_auth0_client_id}
            redirectUri={window.location.origin}
          >
            <InvestorApp />
          </Auth0Provider>
        </Route>
        <Route path="/attorney">
          <Auth0Provider
            domain={investor_auth0_domain}
            clientId={firm_auth0_client_id}
            redirectUri={window.location.origin}
          >
            <LawfirmApp />
          </Auth0Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
