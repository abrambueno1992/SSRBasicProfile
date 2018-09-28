import React, { Component } from 'react'
// import {Breadcrumb} from 'semantic-ui-css/semantic.min.css';
// import {  } from 'semantic-ui-react'
import Link from 'next/link';
import './Navigation.css'
// import {Breadcrumb} 'semantic-ui-react';

// import 'semantic-ui-css/components/modal.css'
// import 'semantic-ui-css/components/header.css'
// import 'semantic-ui-css/components/button.css'
// import 'semantic-ui-css/components/list.css'
// import 'semantic-ui-css/components/breadcrumb.css'
// import  'semantic-ui-css/components/breadcrumbdiv.css'
// import 'semantic-ui-css/components/icon.css'
// import 'semantic-ui-css/themes/default/assets/fonts/icons.eot'
// import 'semantic-ui-css/themes/default/assets/fonts/icons.woff'
// import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2'
import { Modal, Header, Button, List, Breadcrumb } from 'semantic-ui-react'
import Head from 'next/head'

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
        console.log(temp)
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
            console.log(newtemp)
        } else {
            this.setState({
                index: 0,
                current: 'Home'
            })
        }

    }

    render() {
        console.log(Breadcrumb, Breadcrumb.Divider.icon)
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                    />
                    {/* <link rel='stylesheet' href='/../_next/static/style.css' /> */}
                    {/* <link rel='stylesheet' href='semantic-ui-css/semantic.min.css' /> */}
                </Head>
                {/* <Button color="primary" >Hello</Button> */}
                <Breadcrumb size="massive" style={{ height: "3%", marginLeft: "1%", display: 'flex' }}>
                    {this.state.index !== 0 ?
                        <div style={{ display: 'inline-flex' }} >
                            <Breadcrumb.Section>
                                <Link href="/">Home</Link>
                            </Breadcrumb.Section>
                            <Breadcrumb.Divider icon="right chevron" />
                        </div>
                        : <div></div>}


                    {this.state.index !== 1 ?
                        <div style={{ display: 'inline-flex' }}>
                            <Breadcrumb.Section>
                                <Link href="/projects">Projects</Link>
                            </Breadcrumb.Section>
                            <Breadcrumb.Divider icon="right chevron" />
                        </div> : <div></div>}


                    {this.state.index !== 2 ?
                        <div style={{ display: 'inline-flex' }}>
                            <Breadcrumb.Section>
                                <Link href="/about">About</Link>
                            </Breadcrumb.Section>
                            <Breadcrumb.Divider icon="right chevron" />
                        </div> : <div></div>}


                    {this.state.index !== 3 ?
                        <div style={{ display: 'inline-flex' }}>
                            <Breadcrumb.Section>
                                <Link href="/blog">Blog</Link>
                            </Breadcrumb.Section>
                            <Breadcrumb.Divider icon="right chevron" />
                        </div> : <div></div>}


                    {this.state.index !== 4 ?
                        <div style={{ display: 'inline-flex' }}>
                            <Breadcrumb.Section>
                                <Link href="/contact">Contact</Link>
                            </Breadcrumb.Section>
                            <Breadcrumb.Divider icon="right chevron" />
                        </div> : <div></div>}


                    <div style={{ display: 'inline-flex' }}>
                        <Breadcrumb.Section active>{this.state.current}</Breadcrumb.Section>

                    </div>
                </Breadcrumb>
            </div>

        )
    }
}


export default Navigation