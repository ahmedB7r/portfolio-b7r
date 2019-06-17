import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", height: "100%" }}>
        <Grid className="landing-grid ">
          <Cell col={12}>
            <img
              src="https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/profile.jpg?raw=true"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full-satck Web Developer</h1>

              <hr />
              <h2 className="skills-header"> front-end skills </h2>
              <p>
                HTML/CSS | HTML5/CSS3 | CSS Grid/Flex | SCSS |
                Bootstrap/Materialize | Jquery | GSAP(Animation) |
                JavaScript(ES6) | Reactjs(nextjs) / hooks-redux | Apollo | React
                Native
              </p>
              <h2 className="skills-header"> back-end skills </h2>
              <p>
                nodejs(Express) | Firebase | Mongo DB | REST-GraphQL |
                PostgreSQL DB | Prisma | Wordpress/Woocommerce | Git(Github)
              </p>

              <div className="socialss">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ahmed-magdy-b54b09179/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/ahmedB7r"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://www.freecodecamp.org/b7r"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-free-code-camp" />
                </a>

                {/* facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100007002766469"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
