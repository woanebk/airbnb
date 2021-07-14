import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Introduce from "./pages/BecomeHost/Introduce/introduce";
import Location from "./pages/BecomeHost/Location/location";
import Describe from "./pages/BecomeHost/Describe/describe";
import Contact from "./pages/BecomeHost/Contact/contact";
import SearchList from "./pages/SearchList/searchList";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/becomeahost">
          <Introduce />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/descripe">
          <Describe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/searchresult">
          <SearchList />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  </Router>
  );
}


export default App


