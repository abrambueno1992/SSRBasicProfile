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
            <div>

                <ul className="breadcrumb">
                    

                    {this.state.index !== 0 ?
                        <div  >
                            <li>
                                <a href="/">
                                    <Link href="/">Home</Link>
                                </a>
                            </li>
                        </div>
                        : <div></div>}


                    {this.state.index !== 1 ?
                        <div >
                            <li>
                            <a href="/projects">
                                <Link href="/projects">Projects</Link>
                            </a>
                            </li>
                        </div> : <div></div>}


                    {this.state.index !== 2 ?
                        <div >
                            <li>
                            <a href="/about">
                                <Link href="/about">About</Link>
                                </a>
                            </li>
                        </div> : <div></div>}


                    {this.state.index !== 3 ?
                        <div >
                            <li>
                            <a href="/blog">
                                <Link href="/blog">Blog</Link>
                                </a>
                            </li>
                        </div> : <div></div>}


                    {this.state.index !== 4 ?
                        <div >
                            <li>
                            <a href="/contact">
                                <Link href="/contact">Contact</Link>
                                </a>
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