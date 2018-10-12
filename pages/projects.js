import React, { Component } from 'react';
import Navigation from '../components/Navigation'
// import NoteIMG from '../FrontEnd';
// import NoteIMG2 from '../FullStack';
import Head from 'next/head'
import Particles from 'react-particles-js';
import './Projects.css'
export default class Project extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="MainProject">
                <Head>
                    <title>Portfolio Project</title>
                    <meta charSet='utf-8' />
                    <meta name="description" content="Portfolio " />
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"></meta> */}
                </Head>
                <Navigation current={this.props.url.pathname} />
                <div className="ProjectDetails">
                    <h1>Three main Projects</h1>
                    <h2>Front End Project:
                        <a  target="_blank" href="https://lambda-notes-backend.netlify.com/" className="ProjectName">Lambda Notes</a>
                        <a  target="_blank" href="https://github.com/abrambueno1992/front-end-project-week" className="ProjectName">Github Code</a>
                    </h2>
                    <img className="Images" src="/static/FrontEnd.webp" />
                    <h2>Back End Project:
                        <a target="_blank" href="https://abrambueno-lamdanotes.netlify.com/" className="ProjectName">Built A database with authentication for Lambda Notes</a>
                        <a target="_blank" href="https://github.com/abrambueno1992/backendHeroku" className="ProjectName">Github Code</a>
                    </h2>
                    <img className="Images" src='/static/FullStack.webp' />
                    <h2>Capstone Project:
                        <a target="_blank" href="https://labs-next-leaderboard.herokuapp.com/" className="ProjectName">Next Steps: full stack application</a>
                        <a target="_blank" href="https://github.com/Lambda-School-Labs/CS9-LambdaNextLeaderboard" className="ProjectName">Github Code</a>
                    </h2>
                    <img className="Images" src="/static/LeadboardExample.webp" />
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

                        className="ParticlesSprojects"
                    />
                </div>


            </div>
        )
    }
}

//  Project;