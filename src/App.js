import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/Guest/About'
import Users from './pages/Host/Users'
import Introduce from "./pages/BecomeHost/Introduce/introduce";
import Location from "./pages/BecomeHost/Location/location";
import Describe from "./pages/BecomeHost/Describe/describe";
import Contact from "./pages/BecomeHost/Contact/contact";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            < About/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
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
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

