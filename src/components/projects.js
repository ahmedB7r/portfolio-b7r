import React, { Component } from "react";
import download from "../static"
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
     
        <div className="projects-grid">
        {/* Project 1 */}
       <Grid>
          <Cell col={6} tablet={12}>
            <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#292e49",
                  height: "300px",
                  background:
                    'url(${download}) top / cover'
                }}
              >
                Hi ( Developer Connector    )
              </CardTitle>
              <CardText>
                it is a mini-Social network for developers use in it (reactjs(CRA) - Express-Mongoose - passport-jwt)
                that is the basic of MERN Stack App you can [auth(log in - sign up) - make profile - post ,comment and like ] 
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href="https://hi-socialll.herokuapp.com/"
                  >
                    Check it
                  </a>
                </Button>
              </CardActions>
           
            </Card>
          </Cell>
        </Grid> 
      </div>
   
        );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Grid>
          <Cell col={6} tablet={12}>
            <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#292e49",
                  height: "400px",
                  background:
                    "url(https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/devolum.png?raw=true) top / cover"
                }}
              >
                Devolum lab
              </CardTitle>
              <CardText>
                I develop the front-end of this site at Devolum lab
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href="https://devolum.com/"
                  >
                    Check it
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={6} tablet={12}>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#292e49",
                  height: "400px",
                  background:
                    "url(https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/humyum.png?raw=true) top / cover"
                }}
              >
                Humyum
              </CardTitle>
              <CardText>
                I develop the front-end of this site at Devolum lab
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href="https://ahmedb7r.github.io/humyum/"
                  >
                    Check it
                  </a>
                </Button>
              </CardActions>
      
            </Card>
          </Cell>
          <Cell col={6} tablet={12}>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#292e49",
                  height: "400px",
                  background:
                    "url(https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/Bennu.png?raw=true) top / cover"
                }}
              >
                Bennu
              </CardTitle>
              <CardText>
                I develop the front-end of this site at Devolum lab
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href="http://front.devolum.com/beenu"
                  >
                    Check it
                  </a>
                </Button>
              </CardActions>
        
            </Card>
          </Cell>
        </Grid>
      </div>
  
    );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
        <Tab>React / Express</Tab> 
          <Tab>Html / Wordpress</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
