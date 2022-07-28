import React, { Component } from "react";
import Particles from "react-tsparticles";
import Navigation from "./Navigation";
// import NoteIMG from '../FrontEnd.png';
// import NoteIMG2 from '../FullStack.png';
// import "../pages/Projects.css";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainProject">
        <Navigation current={this.props.url.pathname} />
        <div className="ProjectDetails">
          <h1>Three main Projects</h1>

          <h2>
            Full Stack Project:
            <a
              href="https://abrambueno-lamdanotes.netlify.com/"
              className="ProjectName"
            >
              Built A database with authentication for Lambda Notes
            </a>
            <a
              href="https://github.com/abrambueno1992/backendHeroku"
              className="ProjectName"
            >
              Github Code
            </a>
          </h2>
          <img
            style={{ height: "50%", width: "50%" }}
            src="https://res.cloudinary.com/unemployed/image/upload/v1542861715/FullStackJP.jp2"
          />
          <h2>
            Capstone Project:
            <a
              href="https://labs-next-leaderboard.herokuapp.com/"
              className="ProjectName"
            >
              Next Steps: full stack application
            </a>
            <a
              href="https://github.com/Lambda-School-Labs/CS9-LambdaNextLeaderboard"
              className="ProjectName"
            >
              Github Code
            </a>
          </h2>
          <img
            style={{ height: "50%", width: "50%" }}
            src="https://labs-next-leaderboard.herokuapp.com/static/media/LeadboardExample.ff00310b.PNG"
          />
          <h2>
            Mars Rover:
            <a
              href="https://agitated-bell-528514.netlify.com/"
              className="ProjectName"
            >
              Mars Rover
            </a>
            <a
              href="https://github.com/abrambueno1992/SocrateCC/tree/master/marsrover"
              className="ProjectName"
            >
              Github Code
            </a>
          </h2>
          <img
            style={{ height: "50%", width: "50%" }}
            src="https://res.cloudinary.com/unemployed/image/upload/v1548108444/Screenshot_from_2019-01-21_15-53-13.png"
          />
        </div>
        <Particles
          params={{
            particles: {
              number: {
                value: 120,
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
          className="ParticlesStyle"
        />
      </div>
    );
  }
}

//  Project;
