import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import MetaTag from './components/MetaTag/MetaTag'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/js/theme.js'
import * as serviceWorker from './serviceWorker'

import Loading from './loading'
import './assets/scss/index.scss'

var hist = createBrowserHistory();

ReactDOM.render(
  
  <Router history={hist}>
    <ThemeProvider theme={theme}>
      <MetaTag />
      <Route path="/" component={Loading} />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
