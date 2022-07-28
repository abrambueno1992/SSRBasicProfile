import Particles from 'react-tsparticles';
import Image from 'next/image'

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
          return <Image src="/PXL_20220416_215328519.MP.jpg" alt="me" width="706" height="941" />
      </div>

    )
  }
}
export default App