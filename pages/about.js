import React, { Component } from 'react';
import './About.css';
import Particles from 'react-particles-js';
import Head from 'next/head';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import withLayout from '../lib/withLayout';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing.unit * 2,
    },
    iconHover: {
      margin: theme.spacing.unit * 2,
      '&:hover': {
        color: red[800],
      },
    },
  },
});
const styles2 = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

class About extends Component {
  constructor(props) {
    super(props);
  }

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
          <div className="IntroText">Personal Profiles</div>
          <a target="_blank" href="https://github.com/abrambueno1992">
            <div className="AboutTopic">Github</div>
          </a>
          <a target="_blank" href="https://www.thehackhive.com/portfolio/abrambueno1992">
            <div className="AboutTopic">Hack Hive</div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/abraham-bueno-b2871ba4/">
            <div className="AboutTopic">Linkedin</div>
          </a>
        </div>
        <div className={classes.root}>
          <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} />
          <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} color="primary" />
          <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} color="secondary" />
          <Icon className={classNames(classes.icon, 'fa fa-plus-circle')} color="action" />
          <Icon
            className={classNames(classes.iconHover, 'fa fa-plus-circle')}
            color="error"
            style={{ fontSize: 30 }}
          />
          <Icon
            className={classNames(classes.icon, 'fa fa-plus-circle')}
            color="disabled"
            fontSize="large"
          />
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
