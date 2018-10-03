import React, {Component} from 'react';
import Navigation from '../components/Navigation'
import './Contact.css';
import Particles from 'react-particles-js';

class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div className="MainContact">
            <Navigation current={this.props.url.pathname} />
            <div className="ContactIntro">
            <h3 className="ContactText">My email: <span className="ContactDetails">abrambueno1992@gmail.com</span></h3>
            <h3 className="ContactText">My phone number: <span className="ContactDetails">773-240-4646</span></h3>
            <h3 className="ContactText">My LinkedIn:  <a className="ContactDetails" href="https://www.linkedin.com/in/abraham-bueno-b2871ba4/" >LinkedIn</a></h3>
            <h3 className="ContactText">Currently living in: <span className="ContactDetails">Chicago, willing to relocate.</span></h3>
            
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
          style={{
            width: '100%',
            height: '20%',
            background: '#024'
            // backgroundImage: `url(${logo})` 
          }}
        />
        </div>
      )
    }
}

export default Contact;