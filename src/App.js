import React from 'react';
import "./App.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import './components/Navbar';
import Navbar from './components/Navbar';
import HomeScreen from "./components/HomeScreen";
import Story from "./components/Story";
import ContactUs from "./components/ContactUs";
import ServiceCategory from "./components/ServiceCategory";
import Supermarket from "./components/Supermarket";
import Distributions from "./components/Distributions";
import Restaurant from "./components/Restaurant";



function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
            <Story />
            <ServiceCategory />
            <ContactUs />
          </Route>
          <Route exact path="/supermarket">
            <Supermarket />
          </Route>
          <Route exact path="/distributions">
            <Distributions />
          </Route>
          <Route exact path="/restaurant">
            <Restaurant />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
