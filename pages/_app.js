import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
// import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
// import reducer from '../reducers';
import { wrapper } from '../reducers/store'
import { render } from 'react-dom';


// const makeStore = initialState => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    console.log('props', pageProps);
    return { pageProps };
  }
  
  render() {
    const { Component,   pageProps, router,store } = this.props;
  const { asPath, pathname, query } = router;
  const getInitialProps = async ({ Component, ctx })=> {

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    console.log('props', pageProps);
    return { pageProps };
  }
  const url = {
    asPath,
    pathname,
    query,
  };
    return (
      < >
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* <ThemeProvider theme={theme}> */}
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <Component {...pageProps} /> */}
        {/* </ThemeProvider> */}
        {/* <Provider store={store}> */}
            {/* <Router> */}
            <Component {...pageProps} url={url} />
            {/* </Router> */}
          {/* </Provider> */}
      </>
    );
  }
  
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };
// class MyApp extends App {
  
//   static async getInitialProps({ Component, ctx }) {

//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//     console.log('props', pageProps);
//     return { pageProps };
//   }

//   render() {
//     const {
//       Component, pageProps, store, router,
//     } = this.props;
//     const { asPath, pathname, query } = router;
//     const url = {
//       asPath,
//       pathname,
//       query,
//     };
//     return (
//       <Container>
//         <Provider store={store}>
//           {/* <Router> */}
//           <Component {...pageProps} url={url} />
//           {/* </Router> */}
//         </Provider>
//       </Container>
//     );
//   }
// }

export default wrapper.withRedux(MyApp);
