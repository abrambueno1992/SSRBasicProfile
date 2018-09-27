
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation'

import React, { Component } from 'react'
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
      return (
        <div className="Home" >
        <Navigation current={this.props.url.pathname} />
        <div className="Intro">
          <h1 className="Text">Hello, my name is Abraham Bueno, and I'm a FULL STACK web developer</h1>
          <h2 className="Text">The Stack I use is Mongo DB, Express, React, Redux, and Node.</h2>
        </div>
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
                  mode: 'grab'
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
        <div className="One">
        </div>
        <div className="Two">
        </div>
       
      </div>
      )
    }
}
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