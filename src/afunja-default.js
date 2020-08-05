import React, { Fragment } from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

import AfunjaSvg from './components/LogoSvgs/AfunjaSvg'
import NavBar from './components/NavBar/NavBar'
import ParallaxHome from './components/Parallax/ParallaxHome'
import FollowLinks from './components/Follow/FollowLinks'
import Stores from './view/Stores/Stores'
import SoundCloudPlayer from './components/SoundCloud/SoundCloudPlayer'
import ParallaxAbout from './components/Parallax/ParallaxAbout'
import AfunjaLogoSvg from './components/LogoSvgs/AfunjaLogoSvg'

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

export default function Afunja() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <section>
              <AfunjaSvg />
            </section>

            <Header>
              <AppBar position="sticky">
                  <NavBar />
              </AppBar>
            </Header>

            

            <Grid container spacing={3}>
                <Grid item xs={12} style={{backgroundColor: "#fff"}}>
                    <ParallaxHome />
                </Grid>

                <Grid item xs={12} style={{backgroundColor: "#fff"}}>
                    <FollowLinks />
                    <hr />
                {/* </Grid>

                <Grid item xs={12} sm={8} style={{height: "auto", backgroundColor: "#fff"}}> */}
                    {/* STORE */}
                    <h3>Afunja - Single Releases</h3>
                    <Stores />

                    <hr />
                    <h3>Afunja - Studio Demos</h3>
                    <SoundCloudPlayer />

                    
                </Grid>
                {/* <Grid item xs={12} sm={4} style={{height: "20vh", backgroundColor: "#fff"}}>
                    <h4>Contact</h4>
                    <hr />
                    <h4>Subscribe</h4>
                    <small>Mailchimp mailing list.</small>
                </Grid> */}

                <Grid item xs={12} style={{backgroundColor: "#fff"}}>
                    {/* ABOUT */}
                    <ParallaxAbout />
                    <h3>About Afunja</h3>
                </Grid>
            </Grid>

            <section>
              <AfunjaLogoSvg />
            </section>
            
          </Container>
        </Fragment>

      </div>
    </BrowserRouter>
  );
}
