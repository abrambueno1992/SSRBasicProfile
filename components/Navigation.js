import React, { Component } from 'react';
import Link from 'next/link';
import './Navigation.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import withLayout from '../lib/withLayout';

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
    let temp = this.props.current.split('/');
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
        <ul className="breadcrumb">
          {this.state.index !== 0 ? (
            <div>
              <li>
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
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link href="/">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="secondary"
                      size={this.state.size}
                    >
                      Home
                    </Button>
                  </a>
                </Link>
              </li>
            </div>
          )}

          {this.state.index !== 1 ? (
            <div>
              <li>
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
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link href="/projects">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="secondary"
                      size={this.state.size}
                    >
                      Projects
                    </Button>
                  </a>
                </Link>
              </li>
            </div>
          )}

          {this.state.index !== 2 ? (
            <div>
              <li>
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
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link href="/about">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="secondary"
                      size={this.state.size}
                    >
                      About
                    </Button>
                  </a>
                </Link>
              </li>
            </div>
          )}

          {this.state.index !== 3 ? (
            <div>
              <li>
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
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link href="/blog">
                  <a>
                    <Button
                      style={{ marginRight: this.state.margin, marginLeft: this.state.margin }}
                      variant="contained"
                      color="secondary"
                      size={this.state.size}
                    >
                      Blog
                    </Button>
                  </a>
                </Link>
              </li>
            </div>
          )}

          {this.state.index !== 4 ? (
            <div>
              <li>
                <Link href="/contact">
                  <a>
                    <Button variant="contained" color="primary" size={this.state.size}>
                      Contact
                    </Button>
                  </a>
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link href="/contact">
                  <a>
                    <Button variant="contained" color="secondary" size={this.state.size}>
                      Contact
                    </Button>
                  </a>
                </Link>
              </li>
            </div>
          )}

          {/* <div className="activeLink">
                        <li >
                            <a className="activeLinkInner" >
                                {this.state.current}
                            </a>
                        </li>

                    </div> */}
        </ul>
        {/* </Breadcrumb> */}
      </div>
    );
  }
}

export default withLayout(Navigation);
