import Particles from 'react-particles-js';
import './Home.css';
import Head from 'next/head';
import React, { Component } from 'react';
// import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import Navigation from '../components/Navigation';

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
          {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"></meta> */}
        </Head>
        <div className="BreadCrumbIndex">
          <Navigation current={this.props.url.pathname} />
        </div>
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

// const Index = () => (
//   <div style={{ padding: '10px 45px' }}>
//     <Head>
//       <title>Index page</title>
//       <meta name="description" content="This is the description of the Index page" />
//     </Head>
//     <p>Content on Index page</p>
//     <Button variant="contained">MUI button</Button>
//   </div>
// );

// export default withLayout(Index);
// export default (props) => (
//     <div className="Home" >
//         <Navigation current={props.match.path} />
//         <div className="Intro">
//           <h1 className="Text">Hello, my name is Abraham Bueno, and I'm a FULL STACK web developer</h1>
//           <h2 className="Text">The Stack I use is Mongo DB, Express, React, Redux, and Node.</h2>
//         </div>
//         <Particles
//           params={{
//             particles: {
//               number: {
//                 value: 120
//               },
//               line_linked: {
//                 shadow: {
//                   enable: true,
//                   color: "#3CA9D1",
//                   blur: 0
//                 }
//               }
//             },
//             interactivity: {
//               events: {
//                 onhover: {
//                   enable: true,
//                   mode: 'grab'
//                 }
//               }

//             }

//           }}
//           style={{
//             width: '100%',
//             height: '20%',
//             background: '#024'
//             // backgroundImage: `url(${logo})`
//           }}
//         />
//         <div className="One">
//         </div>
//         <div className="Two">
//         </div>

//       </div>
// )
