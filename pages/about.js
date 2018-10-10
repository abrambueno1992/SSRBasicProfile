import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import './About.css';
import Particles from 'react-particles-js';
import Head from 'next/head'

class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="MainAbout">
       <Head>
          <title>Portfolio Project</title>
          <meta charSet='utf-8' />
          <meta name="description" content="Portfolio " />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"></meta> */}
        </Head>
        <Navigation current={this.props.url.pathname} />
        <div className="AboutIntro">
          <div className="IntroText">I'm a lifelong learner, currently improving my web development skills.</div>
          <div className="IntroText">As a full stack web developer I use the MERN stack: Mongo DB, Express, React, and Node.</div>
          <div className="IntroText">Currently learning more on Python's Django framework and Server Side Rendering with React.</div>
          <div className="IntroText">Looking for new opportunities, where I'm a fit for the team and can contribute.</div>

        </div>
        <div className="AboutResources">
          <div className="IntroText">Personal Profiles</div>
          <a href="https://github.com/abrambueno1992">
            <div>Github</div>
          </a>
          <a href="https://www.thehackhive.com/portfolio/abrambueno1992">
            <div>Hack Hive</div>
          </a>
          <a href="https://www.linkedin.com/in/abraham-bueno-b2871ba4/">
            <div>Linkedin</div>
          </a>
        </div>
        {/* <div style={{height: '10%', width: '60%'}}> */}
        <div className="ParticlesStyleAbout">
          <Particles
            params={{
              particles: {
                number: {
                  value: 50
                },
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 0
                  }
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse'
                  }
                }

              }

            }}
            className="ParticlesSabout"
          />
        </div>

        {/* </div> */}


      </div>
    )
  }
}

export default About;