import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import Tab from '@material-ui/core/Tab'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

// SMedia Icons:
import { FaTwitter, FaFacebookSquare, FaYoutube, FaFlickr, FaSpotify, FaSoundcloud, FaInstagram, FaPlayCircle } from "react-icons/fa"

const pageColor = {
  pColor: '#fc0',
  hColor: '#666',
}
const useStyles = makeStyles({
  root: {
    background: '#222',
    height: '100%',
    "& a": {
      color: pageColor.pColor,
      textDecoration: 'none',
      display: 'block',
      fontSize: '0.9rem',
      "& a:hover": {
        color: '#FFF',
        textDecoration: 'none',
      },
      "& a:focus": {
        color: '#FFF',
        textDecoration: 'none',
      },
    },
  },
  iconFa: {
    color: pageColor.pColor,
    minWidth: 30,
  },
  title: {
    color: '#FFF',
    paddingTop: 20,
    paddingBottom: 2,
    overflow: 'hidden',
    position: 'relative',
    fontSize: '0.875rem',
    boxSizing: 'border-box',
    textAlign: 'center',
    flexShrink: 0,
    fontFamily: '"Orbitron", sans-serif',
    fontWeight: 500,
    lineHeight: 1.75,
    maxHeight: 48,
    whiteSpace: 'normal',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  divider: {
    backgroundColor: pageColor.pColor,
    opacity: 0.3,
  },
  tabEight: {
    background: pageColor.pColor,
    color: '#222',
    borderRadius: 0,
    flexShrink: 0,
    border: '1px solid rgba(0, 0, 0, 0.3)',
    position: 'static',
    boxSizing: 'border-box',
    right: 0,
    width: '100%',
    fontFamily: '"Orbitron", sans-serif',
    // textTransform: 'none',
    "&:hover": {
      color: '#fff',
      background: pageColor.hColor,
      textDecoration: 'none',
      opacity: 10,
    }
  },
  sMedia: {
    width: 200,
  },
  sMediaList: {
    width: 'auto',
  },
});

// SMEDIA Props:
const sMediaProps = {
  Twitter: {
    name: "Twitter",
    url: "https://twitter.com/afunjaigiiroko",
    sIcon: <FaTwitter />,
    text: "Twitter",
    numKey: 5,
  },
  Facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/afunjamusic",
    sIcon: <FaFacebookSquare />,
    text: "Facebook",
    numKey: 6,
  },
  Flickr: {
    name: "Flickr",
    url: "https://www.flickr.com/photos/afunja/",
    sIcon: <FaFlickr />,
    text: "Flickr",
    numKey: 7,
  },
  Instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/afunjamusic/",
    sIcon: <FaInstagram />,
    text: "Instagram",
    numKey: 8,
  }
};

const sMediaPlayerProps = {
  Spotify: {
    name: "Spotify",
    url: "https://open.spotify.com/artist/5XHplU5a7KLl1hjgQmFAbi?si=ap8KyLn7Reyy3AOuvMsK6A",
    sIcon: <FaSpotify />,
    alt: "Spotify",
    numKey: 1,
  },
  Jango: {
    name: "Jango",
    url: "https://www.jango.com/music/Afunja/Colours+Instrumental",
    sIcon: <FaPlayCircle />,
    text: "Jango",
    numKey: 2,
  },
  SoundCloud: {
    name: "SoundCloud",
    url: "https://soundcloud.com/afunja",
    sIcon: <FaSoundcloud />,
    text: "SoundCloud",
    numKey: 3,
  },
  YouTube: {
    name: "YouTube",
    url: "https://www.youtube.com/user/igiiroko",
    sIcon: <FaYoutube />,
    text: "YouTube",
    numKey: 4,
  },
};

export default function SwipeDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const sMedia = (anchor) => (
    <div
      className={clsx(classes.sMedia, {
        [classes.sMediaList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Object.keys(sMediaPlayerProps).map(key => (
          <ListItem button key={sMediaPlayerProps[key].numKey}>
            <ListItemIcon className={classes.iconFa}>
              {sMediaPlayerProps[key].sIcon}
            </ListItemIcon>
            <ListItemText>
              <a href={sMediaPlayerProps[key].url} alt={sMediaPlayerProps[key].name} target="_blank" rel="noopener noreferrer">{sMediaPlayerProps[key].name}</a>
            </ListItemText>
          </ListItem>
        ))}
        <Divider className={classes.divider} />
        {Object.keys(sMediaProps).map(key => (
          <ListItem button key={sMediaProps[key].numKey}>
            <ListItemIcon className={classes.iconFa}>
              {sMediaProps[key].sIcon}
            </ListItemIcon>
            <ListItemText>
              <a href={sMediaProps[key].url} alt={sMediaProps[key].name} target="_blank" rel="noopener noreferrer">{sMediaProps[key].name}</a>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>

          <Tab label="follow us" onClick={toggleDrawer(anchor, true)} className={classes.tabEight} />

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >

            <div className={classes.root}>
              <h4 className={classes.title}>Follow Us:</h4>
              <Divider className={classes.divider} />
              {sMedia(anchor)}
            </div>
          </SwipeableDrawer>
          
        </React.Fragment>
      ))}
    </div>
  );
}
