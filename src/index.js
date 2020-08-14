import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { SolarSystemLoading } from 'react-loadingg';
import MetaTag from './components/MetaTag/MetaTag'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/js/theme.js'

import Afunja from './afunja'
import './assets/scss/index.scss'

var hist = createBrowserHistory();

ReactDOM.render(
  
  <Router history={hist}>
    <ThemeProvider theme={theme}>
      <MetaTag />
      <SolarSystemLoading />
      <Route path="/" component={Afunja} />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
