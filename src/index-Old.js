import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import MetaTag from './components/MetaTag/MetaTag'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/js/theme.js'

import { PagePreloader } from 'page-preloader'

import Afunja from './afunja'
import './assets/scss/index.scss'

// use default options
PagePreloader.init({
  debug: false, // default
  // Turns debug mode on or off.
  
  preloadKey: 'uri', // default
  // Saves preloaded data for a certain page under this key.
  // - 'uri' - saves data using URI string. Example: { '/api/products?page=1': ..data.. }
  // - 'page' - saves data using page number. Example: { 1: ..data.. }
  
  preloadDelay: 2000, // default
  // Determines delay in [ms] after which to start preloading.
  
  cacheDuration: 60000, // default
  // Determines cache duration in [ms] for preloaded data
  // Once the duration period expires, data are requested again.
  
  maxInactivityTicks: 20, // default
  // Determines ticks for inactivity period.
  // One tick expires whenever preloaded page history remains unchanged following cache expiration.
})
 
PagePreloader.query("https://afunja.com", "/api/products?page=1&category=baz")
 
window.__preloadedData
// Preloaded data are available inside this global variable
// You should negotiate this object before requesting raw data for a new page

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ThemeProvider theme={theme}>
      <MetaTag />
      <Route path="/" component={Afunja} />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
