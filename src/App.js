import React, {Component} from "react";
import "./App.css";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{textDecoration: "none", color: "white"}}
                to="/portfolio-b7r"
              >
                B7R
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/portfolio-b7r/resume">Resume</Link>
              <Link to="/portfolio-b7r/projects">Projects</Link>
              <Link to="/portfolio-b7r/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{textDecoration: "none", color: "black"}}
                to="/portfolio-b7r/"
              >
                B7R
              </Link>
            }
          >
            <Navigation>
              <Link to="/portfolio-b7r/resume">Resume</Link>
              <Link to="/portfolio-b7r/projects">Projects</Link>
              <Link to="/portfolio-b7r/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
