import React, { Component } from 'react';
import Navigation from '../components/Navigation'
// import NoteIMG from '../../Screenshot from 2018-09-21 20-16-43.png';
// import NoteIMG2 from '../../Screenshot from 2018-09-21 12-12-29.png';
import Particles from 'react-particles-js';
import './Projects.css'
export default class Project extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="MainProject">
                <Navigation current={this.props.url.pathname} />
                <div className="ProjectDetails">
                    <h1>Three main Projects</h1>
                    <h2>Front End Project:
                        <a href="https://lambda-notes-backend.netlify.com/" className="ProjectName">Lambda Notes</a>
                        <a href="https://github.com/abrambueno1992/front-end-project-week" className="ProjectName">Github Code</a>
                    </h2>
                    {/* <img style={{ height: '50%', width: '50%' }} src={NoteIMG2} /> */}
                    <h2>Back End Project:
                        <a href="https://abrambueno-lamdanotes.netlify.com/" className="ProjectName">Built A database with authentication for Lambda Notes</a>
                        <a href="https://github.com/abrambueno1992/backendHeroku" className="ProjectName">Github Code</a>
                    </h2>
                    {/* <img style={{ height: '50%', width: '50%' }} src={NoteIMG} /> */}
                    <h2>Capstone Project:
                        <a href="https://labs-next-leaderboard.herokuapp.com/" className="ProjectName">Next Steps: full stack application</a>
                        <a href="https://github.com/Lambda-School-Labs/CS9-LambdaNextLeaderboard" className="ProjectName">Github Code</a>
                    </h2>
                    {/* <img style={{ height: '50%', width: '50%' }} src="https://labs-next-leaderboard.herokuapp.com/static/media/LeadboardExample.ff00310b.PNG" /> */}
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
                  enable:false,
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 0
                }
              },
              move: {
                  random: true,
                  speed: 3,
                  direction: 'top',
                  out_mode: 'out'
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'bubble'
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
        )
    }
}

//  Project;