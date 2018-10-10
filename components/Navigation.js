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
                        <div  >
                            <li>

                                <Link href="/">
                                    <a href="/">Home</a>
                                </Link>
                            </li>
                        </div>
                        : <div></div>}


                    {this.state.index !== 1 ?
                        <div >
                            <li>
                                <Link href="/projects">
                                    <a href="/projects">Projects</a>

                                </Link>
                            </li>
                        </div> : <div></div>}


                    {this.state.index !== 2 ?
                        <div >
                            <li>

                                <Link href="/about">
                                    <a href="/about">About</a>
                                </Link>
                            </li>
                        </div> : <div></div>}


                    {this.state.index !== 3 ?
                        <div >
                            <li>

                                <Link href="/blog">
                                    <a href="/blog">Blog</a>
                                </Link>
                            </li>
                        </div> : <div></div>}


                    {this.state.index !== 4 ?
                        <div >
                            <li>

                                <Link href="/contact">
                                    <a href="/contact">Contact</a>
                                </Link>
                            </li>
                        </div> : <div></div>}

                    <div >
                        <li>
                            <a >
                                {this.state.current}
                            </a>
                        </li>

                    </div>
                </ul>
                {/* </Breadcrumb> */}
            </div>

        )
    }
}


export default Navigation