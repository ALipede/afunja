import React, { Fragment } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

import AfunjaSvg from './components/LogoSvgs/AfunjaSvg'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
import ParallaxHome from './components/Parallax/ParallaxHome'
import FollowLinks from './components/Follow/FollowLinks'
import Stores from './view/Stores/Stores'
// import EndSars from './view/Stores/EndSars'
import YouTubeChannel from './components/YouTube/YouTubeChannel'
import SoundCloudList from './components/SoundCloud/SoundCloudList'
import AfunjaReleases from './components/SoundCloud/SoundCloudReleases'
import MailChimp from './components/MailChimp/MailChimp'
import Contact from './components/Contact/Contact'
import ParallaxAbout from './components/Parallax/ParallaxAbout'
import AboutAfunja from './view/About/AboutAfunja'
import AfunjaLogoSvg from './components/LogoSvgs/AfunjaLogoSvg'
import JojonaIssina from './components/LogoSvgs/JojonaIssinaSvg'
import AfunjaSvgLight from './components/LogoSvgs/AfunjaSvgLight'
import Footer from './components/Footer/Footer'
import SwipeDrawer from './components/SwipeDrawer/SwipeDrawer'

import ParallaxFree from './components/Parallax/ParallaxFree'
import Adverts from './components/Adverts/Adverts'
import IconsScroll from './view/IconsSet/IconsScroll'
// import WebLinks from './components/WebLinks/WebLinks'

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
      {/* <Navbar color="faded" dark value={location.pathname}> */}
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">african funk &amp; jazz</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='600' href='#home'>Home</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#buy'>Buy</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#play'>Play</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#videos'>Videos</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#demos'>Demos</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#about'>About</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#icons'>Icons</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#subscribe'>Subscribe</AnchorLink>
            </NavItem>
            <NavItem onClick={toggleNavbar} >
              <AnchorLink offset='420' href='#contact'>Contact</AnchorLink>
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
          // path="/"
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
                    <section id='home'>
                      <ParallaxHome />
                    </section>
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <FollowLinks />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <SwipeDrawer />
                  </Grid>
                  <hr />
                  <Grid item xs={12} sm={8}>
                    <section id='buy'>
                      <Stores />
                    </section>
                    <section id='play'>
                      <AfunjaReleases />
                    </section>
                    {/* <EndSars /> */}
                    <section id='videos'>
                      <YouTubeChannel />
                    </section>
                    <section id='demos'>
                      <SoundCloudList />
                    </section>
                    
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <section id='subscribe'>
                      <hr style={{ marginTop: 0, }} />
                      <MailChimp />
                    </section>
                    <hr />
                    <section id='contact'>
                      <Contact />
                    </section>
                    <hr />
                    <Adverts />
                    <hr />
                    {/* <WebLinks /> */}
                  </Grid>

                  <Grid item xs={12}>
                    <section id='about'>
                      <hr />
                      <ParallaxAbout />
                      <AboutAfunja />
                    </section>

                    <section id='icons'>
                      <hr />
                      <IconsScroll />
                    </section>
                  </Grid>
                </Grid>

                <section>

                  <AfunjaLogoSvg />
                  <ParallaxFree />
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
