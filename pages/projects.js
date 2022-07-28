import React, { Component } from "react";
// import NoteIMG from '../FrontEnd';
// import NoteIMG2 from '../FullStack';
import Head from "next/head";
import Particles from "react-tsparticles";
// import "./styles/Projects.css";
import withLayout from "../lib/withLayout";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:
        typeof InstallTrigger !== "undefined"
          ? {
              fullStack:
                "https://res.cloudinary.com/unemployed/image/upload/v1542861715/FullStackJP.png",
              frontEnd:
                "https://res.cloudinary.com/unemployed/image/upload/v1542861733/FrontEndJP.png"
            }
          : {
              fullStack:
                "https://res.cloudinary.com/unemployed/image/upload/v1542650580/FullStack.webp",
              frontEnd:
                "https://res.cloudinary.com/unemployed/image/upload/v1542650580/FrontEnd.webp"
            }
    };
  }

  static getInitialProps({ query }) {}

  render() {
    console.log(
      "this state",
      this.state,
      this.state.images.fullStack,
      this.state.fullStack
    );
    return (
      <div className="MainProject">
        <Head>
          <title>Portfolio Project</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Portfolio " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"></meta> */}
        </Head>
        <div className="ProjectDetails">
          <h1>Three main Projects</h1>
          {/*  <<<<<<<>>>>>>>>>> <<<<<<<>>>>>>>>>> */}
          <h2>
            Full Stack Project:
            <a
              target="_blank"
              href="https://abrambueno-lamdanotes.netlify.com/"
              className="ProjectName"
            >
              Built A database with authentication for Lambda Notes
            </a>
            <a
              target="_blank"
              href="https://github.com/abrambueno1992/backendHeroku"
              className="ProjectName"
            >
              Github Code
            </a>
          </h2>
          <img className="Images" src={this.state.images.fullStack} />
          {/* <<<<<<<>>>>>>>>>> <<<<<<<>>>>>>>>>> */}
          <h2>
            Capstone Project:
            <a
              target="_blank"
              href="https://labs-next-leaderboard.herokuapp.com/"
              className="ProjectName"
            >
              Next Steps: full stack application
            </a>
            <a
              target="_blank"
              href="https://github.com/Lambda-School-Labs/CS9-LambdaNextLeaderboard"
              className="ProjectName"
            >
              Github Code
            </a>
          </h2>
          <img
            className="Images"
            src="https://labs-next-leaderboard.herokuapp.com/static/media/LeadboardExample.ff00310b.PNG"
          />
          {/*  <<<<<<<>>>>>>>>>> <<<<<<<>>>>>>>>>> */}
          <h2>
            Mars Rover:
            <a
              target="_blank"
              href="https://agitated-bell-528514.netlify.com/"
              className="ProjectName"
            >
              Mars Rover
            </a>
            <a
              target="_blank"
              href="https://github.com/abrambueno1992/SocrateCC/tree/master/marsrover"
              className="ProjectName"
            >
              Github Code
            </a>
          </h2>
          <img
            className="Images"
            src="https://res.cloudinary.com/unemployed/image/upload/v1548108444/Screenshot_from_2019-01-21_15-53-13.png"
          />
        </div>
        <div className="ParticlesStyleProjects">
          <Particles
            params={{
              particles: {
                number: {
                  value: 180,
                  density: {
                    enable: false
                  }
                },
                size: {
                  value: 1,
                  random: true,
                  anim: {
                    speed: 2,
                    size_min: 0.3,
                    size: 0.3
                  }
                },
                line_linked: {
                  enable: false,
                  shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 0
                  }
                },
                move: {
                  random: true,
                  speed: 3,
                  direction: "top",
                  out_mode: "out"
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab"
                  },
                  onclick: {
                    enable: true,
                    mode: "bubble"
                  }
                }
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }}
            className="ParticlesSprojects"
          />
        </div>
      </div>
    );
  }
}
export default withLayout(Project);
//  Project;
