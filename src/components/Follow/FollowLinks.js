import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// SMedia Icons:
import { FaSpotify, FaTwitter, FaFacebookSquare, FaYoutube, FaFlickr, FaSoundcloud, FaInstagram, FaPlayCircle, FaReddit } from "react-icons/fa";

const pageColor = {
    pColor: '#999',
    hColor: '#fc0',
}
const useStyles = makeStyles({
    root: {
        display: 'flex',
        "& a": {
            fontSize: '1.5em',
            marginRight: 5,
            color: pageColor.pColor
        },
        "& a:hover": {
            color: pageColor.hColor
        },
        "& a:focus": {
            color: pageColor.hColor
          },
    },
})

// SMEDIA Props:
const sMediaLinksProps = {
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
        alt: "Jango",
        numKey: 2,
    },
    SoundCloud: {
        name: "SoundCloud",
        url: "https://soundcloud.com/afunja-music",
        sIcon: <FaSoundcloud />,
        alt: "SoundCloud",
        numKey: 3,
    },
    
    YouTube: {
        name: "YouTube",
        url: "https://youtube.com/channel/UCStRlfupgbGXNJz5O_NkbIQ",
        sIcon: <FaYoutube />,
        alt: "YouTube",
        numKey: 4,
    },
    Twitter: {
        name: "Twitter",
        url: "https://twitter.com/afunjaigiiroko",
        sIcon: <FaTwitter />,
        alt: "Twitter",
        numKey: 5,
    },
    Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/afunjamusic",
        sIcon: <FaFacebookSquare />,
        alt: "Facebook",
        numKey: 6,
    },
    Flickr: {
        name: "Flickr",
        url: "https://www.flickr.com/photos/afunja/",
        sIcon: <FaFlickr />,
        alt: "Flickr",
        numKey: 7,
    },
    Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/afunjamusic/",
        sIcon: <FaInstagram />,
        alt: "Instagram",
        numKey: 8,
    },
    Reddit: {
        name: "Reddit",
        url: "https://www.reddit.com/user/Afunja/",
        sIcon: <FaReddit />,
        alt: "Reddit",
        numKey: 9,
    },
};

function FollowLinks(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {Object.keys(sMediaLinksProps).map(key => (
                <div key={sMediaLinksProps[key].numKey}>
                <a href={sMediaLinksProps[key].url} alt={sMediaLinksProps[key].alt} title={sMediaLinksProps[key].alt} target="_blank" rel="noopener noreferrer">{sMediaLinksProps[key].sIcon} </a>
                </div>
            ))}
        </div>)
}
export default FollowLinks;
