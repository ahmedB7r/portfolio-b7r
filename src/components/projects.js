import React, { Component } from "react";
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
                    height: "400px",
                    background: "url(../img/devolum.png) top / cover"
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
                      href="http://front.devolum.com/our/"
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
                    background: "url(../img/humyum.png) top / cover"
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
                      href="#"
                    >
                      Soon..
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={6} tablet={12}>
              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#292e49",
                    height: "400px",
                    background: "url(../img/Bennu.png) top / cover"
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
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
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
                    height: "300px",
                    background: "url(../img/miniface.png) top / cover"
                  }}
                >
                  miniFace
                </CardTitle>
                <CardText>
                  it is a mini app can do auth stuff in it , share posts and
                  there is a Notifications by function cloud in firebase
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://miniface-d785a.firebaseapp.com/"
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
          <Tab>Wordpress</Tab>
          <Tab>React</Tab>
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
