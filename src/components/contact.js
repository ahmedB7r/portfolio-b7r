import React, {Component} from "react";
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Ahmed magdy</h2>
            <img
              // src="https://res.cloudinary.com/dp5tdylzs/image/upload/v1665537016/jwf56xygsnfnupku4pju.jpg"
              src="https://res.cloudinary.com/dp5tdylzs/image/upload/v1665537016/jwf56xygsnfnupku4pju.jpg"
              alt="avatar"
              style={{height: "250px"}}
            />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{fontSize: "30px", fontFamily: "Anton"}}
                  >
                    <i className="fa fa-phone" aria-hidden="true" />
                    <a
                      className="small-font"
                      style={{textDecoration: "none"}}
                      href="tel:+201026462262"
                    >
                      +201026462262
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{fontSize: "30px", fontFamily: "Anton"}}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a
                      className="small-font"
                      style={{textDecoration: "none"}}
                      href="mailto:ahmedmagdyb7r@gmail.com?Subject=Hello%20again"
                      target="_top"
                    >
                      ahmedmagdyb7r
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{fontSize: "30px", fontFamily: "Anton"}}
                  >
                    <i className="fab fa-facebook  " aria-hidden="true" />
                    <a
                      className="small-font "
                      style={{textDecoration: "none", paddingLeft: "30px"}}
                      href="https://www.facebook.com/profile.php?id=100007002766469"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ahmed magdy
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
