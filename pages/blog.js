import React, {Component} from 'react';
import Navigation from '../components/Navigation'
import './Blog.css';
import Particles from 'react-particles-js';

class Blog extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div className="MainBlog">
            <Navigation current={this.props.url.pathname}/>
          <div className="BlogIntro">
            <h1>Coming SOON</h1>
          </div>
            
            <Particles
          params={{
            particles: {
              number: {
                value: 300,
                density: {
                    enable: false
                }
              },
              size: {
                  value: 10,
                  random: true,
                  anim: {
                      speed: 10,
                      size_min: 0.3,
                      size: 0.3
                  }
              },
              line_linked: {
                  enable:false,
                // shadow: {
                //   enable: true,
                //   color: "#3CA9D1",
                //   blur: 0
                // }
              },
              move: {
                  random: true,
                  speed: 3,
                  direction: 'bottom-left',
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
export default Blog;