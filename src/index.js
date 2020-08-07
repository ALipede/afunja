import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import MetaTag from './components/MetaTag/MetaTag'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/js/theme.js'

import Afunja from './afunja'
import PrivacyStatement from './components/PrivacyStatement/PrivacyStatement'
import './assets/scss/index.scss'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ThemeProvider theme={theme}>
      <MetaTag />
      <Route path="/" component={Afunja} />
      <Route path="/privacy-statement" component={PrivacyStatement} />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
