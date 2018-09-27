import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import './About.css';
import Particles from 'react-particles-js';

class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="MainAbout">
        <Navigation current={this.props.url.pathname} />
        <div className="AboutIntro">
          <h3 className="IntroText">I'm a lifelong learner, currently improving my web development skills.</h3>
          <h3 className="IntroText">As a full stack web developer I use the MERN stack: Mongo DB, Express, React, and Node.</h3>
          <h3 className="IntroText">Currently learning more on Python's Django framework and Server Side Rendering with React.</h3>
          <h3 className="IntroText">Looking for new opportunities, where I'm a fit for the team and can contribute.</h3>

        </div>
        <div className="AboutResources">
          <h1 className="IntroText">Personal Profiles</h1>
          <a href="https://github.com/abrambueno1992">
            <h1>Github</h1>
          </a>
          <a href="https://www.thehackhive.com/portfolio/abrambueno1992">
            <h1>Hack Hive</h1>
          </a>
          <a href="https://www.linkedin.com/in/abraham-bueno-b2871ba4/">
            <h1>Linkedin</h1>
          </a>
        </div>
        {/* <div style={{height: '10%', width: '60%'}}> */}
        <Particles
          params={{
            particles: {
              number: {
                value: 120
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
          style={{
            width: '100%',
            height: '20%',
            background: '#024'
            // backgroundImage: `url(${logo})` 
          }}
        />
        {/* </div> */}
        
        
      </div>
    )
  }
}

export default About;