import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import Education from "./education";
import Course from "./course";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} tablet={12}>
            <div style={{}}>
              <img
                // src="https://scontent.fcai21-1.fna.fbcdn.net/v/t39.30808-6/273424977_3254201941489866_4595774763795433366_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5lUeXbr86_sAX9OgegK&tn=uzyIMzvGl4qmi8dz&_nc_ht=scontent.fcai21-1.fna&oh=00_AT-6hyWOlKHbpmWVNATuVfDip6I4SOQ2HY6SJnk6g588_g&oe=634AF543"
                src="https://scontent.fcai21-1.fna.fbcdn.net/v/t39.30808-6/273424977_3254201941489866_4595774763795433366_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5lUeXbr86_sAX9OgegK&tn=uzyIMzvGl4qmi8dz&_nc_ht=scontent.fcai21-1.fna&oh=00_AT-6hyWOlKHbpmWVNATuVfDip6I4SOQ2HY6SJnk6g588_g&oe=634AF543"
                alt="avatar"
                className="avatar-img"
              />
            </div>

            <h2 style={{paddingTop: "1em"}}>Ahmed magdy</h2>
            <h4 style={{color: "grey"}}>Programmer</h4>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
            <p>
              I have in the web field just 5 years, learned in it a lot of
              amazing things fastly because I have a huge goal in limited time
              so I will keep learning new technologies to reach my goal ( make
              my code is the standard to other developers. )
            </p>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />

            <h5>Phone</h5>
            <p>
              <a style={{textDecoration: "none"}} href="tel:+201026462262">
                +201026462262
              </a>
            </p>
            <h5>Email</h5>
            <p>
              <a
                style={{textDecoration: "none"}}
                href="mailto:ahmedmagdyb7r@gmail.com?Subject=Hello%20again"
                target="_top"
              >
                ahmedmagdyb7r@gmail.com
              </a>
            </p>

            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={"present"}
              schoolName="Computer and Control systems Engineering  Mansoura University"
              schoolDescription=" control systems engineering is an engineering discipline that applies automatic control theory to design systems with desired behaviors in control environments. The discipline of controls overlaps and is usually taught along with electrical engineering at many institutions around the world."
            />
            <h2>Experience</h2>

            <Experience
              startYear={"1 / 2021"}
              endYear={"present"}
              jobName="B7r Store"
              jobDescription={
                <>
                  I'm working now as a Tech-lead at{" "}
                  <a target={"_blank"} href="https://www.b7r.store">
                    {" "}
                    B7r Store
                  </a>{" "}
                  (ecommerce as a service SAAS)
                </>
              }
            />
            <Experience
              startYear={"6 / 2019"}
              endYear={"1 / 2021"}
              jobName="Cairo Tech"
              jobDescription=" I worked as a mern stack developer in cairo-tech in maadi   "
            />

            <Experience
              startYear={"4 / 2019"}
              endYear={"6 / 2019"}
              jobName="Freelancer"
              jobDescription=" I worked for a while as a freelancer in UpWork  "
            />
            <Experience
              startYear={"1 / 2019"}
              endYear={"4 / 2019"}
              jobName=" Awamer elshabka"
              jobDescription=" I was working as a wordpress developer at first , then lerarned nodejs to make shift to mern stack developer  "
            />
            <Experience
              startYear={"8 / 2018"}
              endYear={"1 / 2019"}
              jobName=" Devolum labs"
              jobDescription=" I was working as a psd to html (pixel perfect) at first , then lerarned animation , then worked as a wordpress dev "
            />
            <hr style={{borderTop: "3px solid #e22947"}} />

            <h3>Courses</h3>
            <Grid>
              <Course
                link="https://www.udemy.com/course/nodejs-master-class/"
                name="Node.js: The Complete Guide to Build RESTful APIs (2018)"
              />
              <Course
                link="https://www.udemy.com/course/advanced-node-for-developers/"
                name="Node JS: Advanced Concepts"
              />
              <Course
                link="https://www.udemy.com/course/universal-react-with-nextjs-the-ultimate-guide/"
                name="Universal React with Next.js - The Ultimate Guide"
              />
              <Course
                link="https://www.udemy.com/course/webpack-from-beginner-to-advanced/"
                name="Webpack 4 in 2019 The Complete Tutorial "
              />
              <Course
                link="https://www.udemy.com/course/awesome-nextjs-with-react-and-node-amazing-portfolio-app/"
                name="Complete Next.js with React & Node - Beautiful Portfolio App"
              />
              <Course
                link="https://www.udemy.com/course/react-native-advanced/"
                name="React Native: Advanced Concepts"
              />
              <Course
                link="https://advancedreact.com/"
                name="Fullstack Advanced React & GraphQL"
              />
              <Course
                link="https://www.udemy.com/course/learn-website-hacking-penetration-testing-from-scratch/"
                name="Learn Website Hacking  Penetration Testing From Scratch"
              />

              <Course
                link="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
                name="Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)"
              />
              <Course
                link="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"
                name="The Complete Web Developer in 2019: Zero to Mastery"
              />
              <Course
                link="https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/"
                name="The Complete Junior to Senior Web Developer Roadmap (2020)"
              />
              <Course
                link="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
                name="Master the Coding Interview: Data Structures + Algorithms"
              />
              <Course
                link="https://www.udemy.com/course/advanced-javascript-concepts/"
                name="Advanced JavaScript Concepts"
              />
            </Grid>

            {/* <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills skill='HTML/CSS' progress={95} />
            <Skills skill='Reactjs' progress={90} />
            <Skills skill='Nodejs' progress={87} />
            <Skills skill='Wordpress' progress={75} />
            <Skills skill='React Native' progress={60} /> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
