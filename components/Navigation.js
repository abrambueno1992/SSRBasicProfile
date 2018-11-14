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
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="Nav">
        <ul className="breadcrumb">
          {this.state.index !== 0 ? (
            <div>
              <li>
                <Link href="/">
                  <a>
                    <Button
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="primary"
                      size="small"
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
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="secondary"
                      size="small"
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
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="primary"
                      size="small"
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
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="secondary"
                      size="small"
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
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="primary"
                      size="small"
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
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="secondary"
                      size="small"
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
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="primary"
                      size="small"
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
                      style={{ marginRight: 10, marginLeft: 10 }}
                      variant="contained"
                      color="secondary"
                      size="small"
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
                    <Button variant="contained" color="primary" size="small">
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
                    <Button variant="contained" color="secondary" size="small">
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

export default Navigation;
