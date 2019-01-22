import React, { Component } from 'react';
import './styles/Blog.css';
import Head from 'next/head';
import Particles from 'react-particles-js';
import withLayout from '../lib/withLayout';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainBlog">
        <Head>
          <title>Portfolio Project</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Portfolio " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"></meta> */}
        </Head>
        <div className="BlogIntro">
          <h1>Coming SOON</h1>
        </div>
        <div className="ParticlesBlog">
          <Particles
            params={{
              particles: {
                number: {
                  value: 120,
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 10,
                  random: true,
                  anim: {
                    speed: 10,
                    size_min: 0.3,
                    size: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
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
                  out_mode: 'out',
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab',
                  },
                  onclick: {
                    enable: true,
                    mode: 'bubble',
                  },
                },
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            }}
            className="ParticlesSblog"
          />
        </div>
      </div>
    );
  }
}
export default withLayout(Blog);
