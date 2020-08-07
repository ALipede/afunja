import React, { Fragment } from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

import AfunjaSvg from './components/LogoSvgs/AfunjaSvg'
// import NavBarLinks from './components/NavBar/NavBar'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import ParallaxHome from './components/Parallax/ParallaxHome'
import FollowLinks from './components/Follow/FollowLinks'
import Stores from './view/Stores/Stores'
import SoundCloudList from './components/SoundCloud/SoundCloudList'
import MailChimp from './components/MailChimp/MailChimp'
import Contact from './components/Contact/Contact'
import ParallaxAbout from './components/Parallax/ParallaxAbout'
import AboutAfunja from './view/About/AboutAfunja'
import AfunjaLogoSvg from './components/LogoSvgs/AfunjaLogoSvg'
import JojonaIssina from './components/LogoSvgs/JojonaIssinaSvg'
import AfunjaSvgLight from './components/LogoSvgs/AfunjaSvgLight'
import Footer from './components/Footer/Footer'
import SwipeDrawer from './components/SwipeDrawer/SwipeDrawer'

import IconsScroll from './view/IconsSet/IconsScroll'

// import { FaShoppingCart } from "react-icons/fa"
import './assets/scss/index.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const { createRef, useState, useEffect } = React

function Header({ children, sticky = false, className, ...rest }) {
  const [isSticky, setIsSticky] = useState(false)
  const ref = React.createRef()

  // mount 
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      )

    observer.observe(cachedRef)

    // unmount
    return function () {
      observer.unobserve(cachedRef)
    }
  }, [])

  return (
    <header className={className + (isSticky ? " isSticky" : "")} ref={ref} {...rest}>
      {children}
    </header>
  )
}




// NavBar
const NavBarLinks = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" dark value={location.pathname}>
        <NavbarBrand href="/" className="mr-auto">african funk &amp; jazz</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Icons</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
}


export default function Afunja() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
      <Route
          path="/"
          render={({ location }) => (
        
        <Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <section>
              <AfunjaSvg />
            </section>

            <Header>
              <AppBar position="sticky">
                <NavBarLinks />
              </AppBar>
            </Header>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ParallaxHome />
              </Grid>

              <Grid item xs={12} sm={8}>
                <FollowLinks />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SwipeDrawer />
              </Grid>

              <hr />

              <Grid item xs={12} sm={8}>
                <Stores />
                <SoundCloudList />
              </Grid>

              <Grid item xs={12} sm={4}>
                <MailChimp />
                <hr />
                <Contact />
              </Grid>
              
              <Grid item xs={12}>
                <hr />
                <ParallaxAbout />
                <AboutAfunja />
                <hr />
                <IconsScroll />
              </Grid>

            </Grid>

            <section>
              <AfunjaLogoSvg />
              <JojonaIssina />
              <AfunjaSvgLight />
              <Footer />
            </section>

          </Container>
        </Fragment>

)}
/>

      </div>
    </BrowserRouter>
  );
}
