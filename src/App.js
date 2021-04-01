import "./assets/main.css";
import LandingPage from "./LandingPage/LandingPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import InvestorApp from "./Investor/InvestorApp";

function App() {
  // const history = useHistory();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/investor" component={InvestorApp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
