import React, { Component } from 'react';
import './styles/Contact.css';
import Particles from 'react-particles-js';
import Head from 'next/head';
import withLayout from '../lib/withLayout';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainContact">
        <Head>
          <title>Portfolio Project</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Portfolio " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"></meta> */}
        </Head>
        <div className="ContactIntro">
          <div className="ContactText">
            My email:
            {' '}
            <span className="ContactDetails">abrambueno1992@gmail.com</span>
          </div>
          <div className="ContactText">
            My phone number:
            {' '}
            <span className="ContactDetails">773-240-4646</span>
          </div>
          {/* <div className="ContactText">
            My LinkedIn:
            {' '}
            <a
              target="_blank"
              className="ContactDetails"
              href="https://www.linkedin.com/in/abraham-bueno-b2871ba4/"
            >
              LinkedIn
            </a>
          </div> */}
          <div className="ContactText">
            Currently living in:
            {' '}
            <span className="ContactDetails">Chicago, willing to relocate.</span>
          </div>
        </div>
        <div className="ParticlesStyleContact">
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 1,
                  random: true,
                  anim: {
                    speed: 2,
                    size_min: 0.3,
                    size: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                  shadow: {
                    enable: true,
                    color: '#3CA9D1',
                    blur: 0,
                  },
                },
                move: {
                  random: true,
                  speed: 3,
                  direction: 'top',
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
            className="ParticlesScontact"
          />
        </div>
      </div>
    );
  }
}

export default withLayout(Contact);
