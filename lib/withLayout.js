import React from 'react';
import PropTypes from 'prop-types';
// import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import getContext from './context';
import Navigation from '../components/Navigation';

function withLayout(BaseComponent) {
  class App extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.pageContext = this.props.pageContext || getContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <div>
          <StyledEngineProvider injectFirst>
            <ThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <div>
                <Navigation {...this.props} />
                <BaseComponent {...this.props} />
              </div>
            </ThemeProvider>
          </StyledEngineProvider>
        </div>
      );
    }
  }

  App.propTypes = {
    pageContext: PropTypes.object, // eslint-disable-line
  };

  App.defaultProps = {
    pageContext: null,
  };

  App.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return App;
}

export default withLayout;
