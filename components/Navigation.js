import React, { Component } from 'react'

import Link from 'next/link';
import './Navigation.css'


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: null,
            current: ''
        }

    }
    componentDidMount = () => {
        let temp = this.props.current.split('/');
        temp = temp[1].split('');
        if (temp[0]) {
            temp[0] = temp[0].toUpperCase();
            let newtemp = '';
            temp.forEach(element => {
                newtemp += element;
            });
            if (newtemp === 'Home') {
                // this.setState({current: newtemp, index: 0})

            } else if (newtemp === 'Projects') {
                this.setState({ current: newtemp, index: 1 })

            } else if (newtemp === 'About') {
                this.setState({ current: newtemp, index: 2 })

            } else if (newtemp === 'Blog') {
                this.setState({ current: newtemp, index: 3 })
            } else if (newtemp === 'Contact') {
                this.setState({ current: newtemp, index: 4 })
            } else {
                this.setState({ current: newtemp, index: 0 })

            }
        } else {
            this.setState({
                index: 0,
                current: 'Home'
            })
        }

    }

    render() {
        return (
            <div className="Nav">

                <ul className="breadcrumb">
                    {this.state.index !== 0 ?
                        <div className="inactiveLink">
                            <li>
                                <Link href="/">
                                    <a >Home</a>
                                </Link>
                            </li>
                        </div>
                        : 
                        <div className="activeLink" >
                        <li>
                            <Link href="/">
                                <a className="activeLinkInner" >Home</a>
                            </Link>
                        </li>
                    </div>    
                    }


                    {this.state.index !== 1 ?
                        <div className="inactiveLink">
                            <li>
                                <Link href="/projects">
                                    <a >Projects</a>
                                </Link>
                            </li>
                        </div> : 
                        <div className="activeLink">
                            <li>
                                <Link href="/projects">
                                    <a className="activeLinkInner" >Projects</a>
                                </Link>
                            </li>
                        </div>}


                    {this.state.index !== 2 ?
                        <div className="inactiveLink">
                            <li>
                                <Link href="/about">
                                    <a  >About</a>
                                </Link>
                            </li>
                        </div> : 
                        <div className="activeLink">
                            <li>
                                <Link href="/about">
                                    <a className="activeLinkInner" >About</a>
                                </Link>
                            </li>
                        </div>}


                    {this.state.index !== 3 ?
                        <div className="inactiveLink">
                            <li>
                                <Link href="/blog">
                                    <a >Blog</a>
                                </Link>
                            </li>
                        </div> : 
                        <div className="activeLink">
                            <li>
                                <Link href="/blog">
                                    <a className="activeLinkInner" >Blog</a>
                                </Link>
                            </li>
                        </div>}


                    {this.state.index !== 4 ?
                        <div className="inactiveLink">
                            <li>
                                <Link href="/contact">
                                    <a >Contact</a>
                                </Link>
                            </li>
                        </div> : 
                        <div className="activeLink">
                            <li>
                                <Link href="/contact">
                                    <a className="activeLinkInner" >Contact</a>
                                </Link>
                            </li>
                        </div>}

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

        )
    }
}


export default Navigation