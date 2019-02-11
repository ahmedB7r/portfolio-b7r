import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} tablet={12}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://github.com/ahmedB7r/portfolio-b7r/blob/master/public/img/profile.jpg?raw=true"
                alt="avatar"
                className="avatar-img"
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Ahmed magdy</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I have in web field just 1.5 years ,learned in it alot of amazing
              things ,fastly like smart boy , becouse i love it since childhood
              so i will keep learning new technologies to reach my goal (make my
              code is the standard to other developers)
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h5>Phone</h5>
            <p>
              <a style={{ textDecoration: "none" }} href="tel:+201026462262">
                +201026462262
              </a>
            </p>
            <h5>Email</h5>
            <p>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:ahmedmagdyb7r@gmail.com?Subject=Hello%20again"
                target="_top"
              >
                ahmedmagdyb7r@gmail.com
              </a>
            </p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={"present"}
              schoolName="Computer and Control systems Engineering  Mansoura University"
              schoolDescription=" control systems engineering is an engineering discipline that applies automatic control theory to design systems with desired behaviors in control environments. The discipline of controls overlaps and is usually taught along with electrical engineering at many institutions around the world."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={"8 / 2018"}
              endYear={"1 / 2019"}
              jobName=" Devolum labs"
              jobDescription=" I was working as psd to html at first , then lerarned animation , then worked as a wordpress front-end "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="React/Redux" progress={65} />
            <Skills skill="Wordpress" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
