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
      <div>
          <h1>Hannah was here! with h1 tag</h1>
          <p>Hannah also knows about paragraphs</p>
          
      </div>

    )
  }
}
export default App