import Particles from 'react-particles-js';
import './Home.css';
import Head from 'next/head';
import React, { Component } from 'react';
// import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withLayout from '../lib/withLayout';
import Navigation from '../components/Navigation';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

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
export default withLayout(withStyles(styles)(App));

// <<<<<<<<<<<<>>>>>>>>>>>
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

// function PermanentDrawerLeft(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
// <AppBar position="fixed" className={classes.appBar}>
//   <Toolbar>
//     <Typography variant="h6" color="inherit" noWrap>
//       Permanent drawer
//     </Typography>
//   </Toolbar>
// </AppBar>

{
  /* <main className={classes.content}>
  <div className={classes.toolbar} />
  <Typography paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
    donec massa sapien faucibus et molestie ac.
  </Typography>
  <Typography paragraph>
    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
  </Typography>
</main> */
}
//     </div>
//   );
// }

// PermanentDrawerLeft.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(PermanentDrawerLeft);

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
