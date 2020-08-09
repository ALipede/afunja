import React, { Fragment } from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { makeStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

import AfunjaSvg from './components/LogoSvgs/AfunjaSvg'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import ParallaxHome from './components/Parallax/ParallaxHome'
import FollowLinks from './components/Follow/FollowLinks'
import Stores from './view/Stores/Stores'
import SoundCloudList from './components/SoundCloud/SoundCloudList'
// import MailChimp from './components/MailChimp/MailChimp'
import Contact from './components/Contact/Contact'
import ParallaxAbout from './components/Parallax/ParallaxAbout'
import AboutAfunja from './view/About/AboutAfunja'
import AfunjaLogoSvg from './components/LogoSvgs/AfunjaLogoSvg'
import JojonaIssina from './components/LogoSvgs/JojonaIssinaSvg'
import AfunjaSvgLight from './components/LogoSvgs/AfunjaSvgLight'
import Footer from './components/Footer/Footer'
import SwipeDrawer from './components/SwipeDrawer/SwipeDrawer'

import Adverts from './components/Adverts/Adverts'
import CookieConsent from 'react-cookie-consent'
import IconsScroll from './view/IconsSet/IconsScroll'

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
              <AnchorLink offset='100' href='#home'>Home</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink offset='100' href='#about'>About</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink offset='100' href='#icons'>Icons</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href='#subscribe'>Subscribe</AnchorLink>
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
                    <Stores />
                    <SoundCloudList />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    {/* <MailChimp /> */}
                    <hr style={{ marginTop: 0, }} />
                    <Contact />
                    <hr />
                    <Adverts />
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
                  <JojonaIssina />
                  <AfunjaSvgLight />
                  <Footer />
                </section>

                <section id='subscribe'></section>
              </Container>
            </Fragment>

          )}
        />

        {/* <CookieConsent /> */}
        <CookieConsent
          location="bottom"
          buttonText="Consent"
          cookieName="Afunja"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          <Container>
            <small>This website uses third party cookies to enhance the user experience. <a href="https://afunja.com/privacy-statement/privacy-statement.html" alt="Privacy Statement" title="Privacy Statement" target="_parent" rel="noopener noreferrer">Privacy Statement</a></small>
          </Container>
        </CookieConsent>

      </div>
    </BrowserRouter>
  );
}
