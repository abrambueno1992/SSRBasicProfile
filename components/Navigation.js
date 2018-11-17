import React, { Component } from 'react';
import Link from 'next/link';
import './Navigation.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withLayout from '../lib/withLayout';

const styles = {
  root: {
    flexGrow: 1,
    // width: '100%',
    // justifyContent: 'space-evenly',
  },
  space: {
    justifyContent: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
      current: '',
      isMobile: false,
      size: 'large',
      margin: 10,
    };
  }

  componentDidMount = () => {
    let temp = this.props.url.pathname.split('/');
    temp = temp[1].split('');
    if (temp[0]) {
      temp[0] = temp[0].toUpperCase();
      let newtemp = '';
      temp.forEach((element) => {
        newtemp += element;
      });
      if (newtemp === 'Home') {
        // this.setState({current: newtemp, index: 0})
      } else if (newtemp === 'Projects') {
        this.setState({ current: newtemp, index: 1 });
      } else if (newtemp === 'About') {
        this.setState({ current: newtemp, index: 2 });
      } else if (newtemp === 'Blog') {
        this.setState({ current: newtemp, index: 3 });
      } else if (newtemp === 'Contact') {
        this.setState({ current: newtemp, index: 4 });
      } else {
        this.setState({ current: newtemp, index: 0 });
      }
    } else {
      this.setState({
        index: 0,
        current: 'Home',
      });
    }

    const isMobile = window.innerWidth < 768;

    if (this.state.isMobile !== isMobile) {
      this.setState({ isMobile }); // eslint-disable-line
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.isMobile !== this.state.isMobile && this.state.isMobile === true) {
      this.setState({ size: 'small', margin: 0 });
      console.log('dimensions');
    }
  };

  render() {
    const { classes } = this.props;
    console.log('props', this.props, this.state.isMobile);
    return (
      <div className="Nav">
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
            {/* <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button> */}
            {this.state.index !== 0 ? (
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link href="/">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="primary"
                      size={this.state.size}
                    >
                      Home
                    </Button>
                  </a>
                </Link>
              </Typography>
            ) : (
              <Link href="/">
                <a>
                  <Button
                    style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                    variant="contained"
                    color="inherit"
                    size={this.state.size}
                  >
                    Home
                  </Button>
                </a>
              </Link>
            )}

            {this.state.index !== 1 ? (
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link href="/projects">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="primary"
                      size={this.state.size}
                    >
                      Projects
                    </Button>
                  </a>
                </Link>
              </Typography>
            ) : (
              <Link href="/projects">
                <a>
                  <Button
                    style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                    variant="contained"
                    color="inherit"
                    size={this.state.size}
                  >
                    Projects
                  </Button>
                </a>
              </Link>
            )}

            {this.state.index !== 2 ? (
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link href="/about">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="primary"
                      size={this.state.size}
                    >
                      About
                    </Button>
                  </a>
                </Link>
              </Typography>
            ) : (
              <Link href="/about">
                <a>
                  <Button
                    style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                    variant="contained"
                    color="inherit"
                    size={this.state.size}
                  >
                    About
                  </Button>
                </a>
              </Link>
            )}

            {this.state.index !== 3 ? (
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link href="/blog">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="primary"
                      size={this.state.size}
                    >
                      Blog
                    </Button>
                  </a>
                </Link>
              </Typography>
            ) : (
              <Link href="/blog">
                <a>
                  <Button
                    style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                    variant="contained"
                    color="inherit"
                    size={this.state.size}
                  >
                    Blog
                  </Button>
                </a>
              </Link>
            )}

            {this.state.index !== 4 ? (
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link href="/contact">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="primary"
                      size={this.state.size}
                    >
                      Contact
                    </Button>
                  </a>
                </Link>
              </Typography>
            ) : (
              <Link href="/contact">
                <a>
                  <Button
                    style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                    variant="contained"
                    color="inherit"
                    size={this.state.size}
                  >
                    Contact
                  </Button>
                </a>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// function ButtonAppBar(props) {
// const { classes } = props;
// return (
//   <div className={classes.root}>
// <AppBar position="static">
//   <Toolbar>
//     {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//       <MenuIcon />
//     </IconButton> */}
//     <Typography variant="h6" color="inherit" className={classes.grow}>
//       News
//     </Typography>
//     <Button color="inherit">Login</Button>
//   </Toolbar>
// </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonAppBar);
