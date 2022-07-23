import React, {Component} from "react";
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
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Grid>
            <Cell col={6} tablet={12}>
              <Card
                shadow={5}
                style={{minHeight: "100%", minWidth: "100%", margin: "auto"}}
              >
                <CardTitle
                  style={{
                    color: "#292e49",
                    height: "300px",
                    background:
                      "  url(https://www.b7r.store/static/images/NewUpdatedLogo.svg) no-repeat center / contain ",
                  }}
                />
                <CardTitle
                  style={{
                    color: "#292e49",
                    marginBottom: "0",
                    paddingBottom: "0",
                  }}
                >
                  B7R STORE (SAAS)
                </CardTitle>
                <CardText>
                  it is an eCommerce Provider like (shopify) use in it
                  (reactjs(Nextjs) - apollo-client - styled component - tailwind
                  - Apollo-server (server) - PostgreSQL DB - Prisma - stripe -
                  jwt ) that is the best of the MERN Stack technologies [ auth
                  (log in - sign up - reset password) - permission system -
                  products - orders - cart - search and more ]
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{textDecoration: "none"}}
                      href="https://www.b7r.store/"
                    >
                      Check it
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12}>
              <Card
                shadow={5}
                style={{minHeight: "100%", minWidth: "100%", margin: "auto"}}
              >
                <CardTitle
                  style={{
                    color: "#292e49",
                    height: "300px",
                    background:
                      "url(https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/download.png?raw=true) no-repeat center / contain",
                  }}
                />
                <CardTitle
                  style={{
                    color: "#292e49",
                    marginBottom: "0",
                    paddingBottom: "0",
                  }}
                >
                  Hi ( Developer Connector )
                </CardTitle>
                <CardText>
                  it is a mini-Social network for developers use in it
                  (reactjs(CRA) - Express-Mongoose - passport-jwt) that is the
                  basic of MERN Stack App you can [auth(log in - sign up) - make
                  profile - post ,comment and like ]
                </CardText>
                <CardActions
                  border
                  style={{
                    marginTop: "35px",
                  }}
                >
                  <Button colored>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{textDecoration: "none"}}
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
              <Card shadow={5} style={{minWidth: "100%", margin: "auto"}}>
                <CardTitle
                  style={{
                    color: "#292e49",
                    height: "400px",
                    background:
                      "url(https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/devolum.png?raw=true) no-repeat center / contain",
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
                      style={{textDecoration: "none"}}
                      href="https://devolum.com/"
                    >
                      Check it
                    </a>
                  </Button>
                </CardActions>
                <CardMenu style={{color: "#fff"}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={6} tablet={12}>
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: "100%", margin: "auto"}}>
                <CardTitle
                  style={{
                    color: "#292e49",
                    height: "400px",
                    background:
                      "url(https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/humyum.png?raw=true) no-repeat center / contain",
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
                      style={{textDecoration: "none"}}
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
              <Card shadow={5} style={{minWidth: "100%", margin: "auto"}}>
                <CardTitle
                  style={{
                    color: "#292e49",
                    height: "400px",
                    background:
                      "url(https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/Bennu.png?raw=true) no-repeat center / contain",
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
                      style={{textDecoration: "none"}}
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
          onChange={(tabId) => this.setState({activeTab: tabId})}
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
