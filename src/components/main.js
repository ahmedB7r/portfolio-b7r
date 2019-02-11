import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/portfolio-b7r" component={LandingPage} />
    <Route path="/portfolio-b7r/contact" component={Contact} />
    <Route path="/portfolio-b7r/projects" component={Projects} />
    <Route path="/portfolio-b7r/resume" component={Resume} />
  </Switch>
);

export default Main;
