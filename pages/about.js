import React, { Component } from 'react';
import './About.css';
import Particles from 'react-particles-js';
import Head from 'next/head';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import withLayout from '../lib/withLayout';

library.add(fab, faCheckSquare, faCoffee);

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  icons: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
    height: '50%',
  },
});

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // loadCSS(
    //   'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
    //   document.querySelector('#insertion-point-jss'),
    // );
  }

  static getInitialProps({ query }) {}

  render() {
    const { classes } = this.props;

    return (
      <div className="MainAbout">
        <Head>
          <title>Portfolio Project</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Portfolio " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"></meta> */}
        </Head>
        <div className="AboutIntro">
          {/* <div className="IntroText">
            I'm a lifelong learner, currently improving my web development skills.
          </div>
          <div className="IntroText">
            As a full stack web developer I use the MERN stack: Mongo DB, Express, React, and Node.
          </div>
          <div className="IntroText">
            Currently learning more on Python's Django framework and Server Side Rendering with
            React.
          </div>
          <div className="IntroText">
            Looking for new opportunities, where I'm a fit for the team and can contribute.
          </div> */}
          <Paper className={classes.root} elevation={1}>
            <Typography component="p">
              I'm a lifelong learner, currently improving my web development skills.
            </Typography>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography component="p">
              As a full stack web developer I use the MERN stack: Mongo DB, Express, React, and
              Node.
            </Typography>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography component="p">
              Currently learning more on Python's Django framework and Server Side Rendering with
              React.
            </Typography>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography component="p">
              Looking for new opportunities, where I'm a fit for the team and can contribute
            </Typography>
          </Paper>
        </div>
        <div className="AboutResources">
          {/* <div className="IntroText">Personal Profiles</div>
          <a target="_blank" href="https://github.com/abrambueno1992">
            <div className="AboutTopic">Github</div>
          </a>
          <a target="_blank" href="https://www.thehackhive.com/portfolio/abrambueno1992">
            <div className="AboutTopic">Hack Hive</div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/abraham-bueno-b2871ba4/">
            <div className="AboutTopic">Linkedin</div>
          </a> */}
          <Paper className={classes.icons}>
            <Typography variant="h5" component="h3">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </Typography>
            <Typography component="p">GitHub</Typography>
          </Paper>

          <Paper className={classes.icons}>
            <a target="_blank" href="https://www.linkedin.com/in/abraham-bueno-b2871ba4/">
              {/* <div >Linkedin</div> */}
              <Typography variant="h5" component="h3">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </Typography>

              <Typography className="AboutTopic" component="p">LinkedIn</Typography>
            </a>
          </Paper>

          <Paper className={classes.icons}>
            <Typography variant="h5" component="h3">
              <FontAwesomeIcon icon="check-square" />
            </Typography>
            <Typography component="p">The Hack Hive</Typography>
          </Paper>
        </div>

        <div className="ParticlesStyleAbout">
          <Particles
            params={{
              particles: {
                number: {
                  value: 50,
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
                    mode: 'repulse',
                  },
                },
              },
            }}
            className="ParticlesSabout"
          />
        </div>

        {/* </div> */}
      </div>
    );
  }
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withLayout(withStyles(styles)(About));
