import Particles from 'react-tsparticles';
// import './styles/Home.css';
import Head from 'next/head';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import withLayout from '../lib/withLayout';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Head>
          <title>Portfolio Project</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Portfolio " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="Intro">
          <div className="Text">
            Hello, my name is Abraham Bueno, and I'm a Full Stack Web Developer
          </div>
          <div className="Text">The Stack I use is Mongo DB, Express, React, Redux, and Node.</div>
        </div>
        <div className="ParticlesStyleIndex">
          <Particles
            params={{
              particles: {
                number: {
                  value: 70,
                },
                line_linked: {
                  shadow: {
                    enable: true,
                    color: '#3CA9D1',
                    blur: 0,
                  },
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab',
                  },
                },
              },
            }}
            className="ParticlesShome"
          />
        </div>
      </div>
    );
  }
}
export default withLayout(App);
