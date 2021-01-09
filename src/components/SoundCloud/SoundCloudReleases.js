import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Iframe from 'react-iframe'

import { FaSoundcloud } from "react-icons/fa"

var SC = require('soundcloud');

SC.initialize({
    client_id: '839605942',
    redirect_uri: 'https://soundcloud.com/afunja-music'
});

const pageColor = {
    dColor: '#666',
}
const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        width: '100%',
        marginTop: 10,
    },
    soundCloud: {
        border: 'none',
        height: 380,
        width: '100%',
        backgroundColor: 'rgb(245 245 245)',
        border: '5px solid rgb(245 245 245)',
    }
});

// SoundCloud Props:
const soundCloudProps = {
    AfunjaReleases2020: {
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1186224781&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        numKey: 1,
    },
};

export default function SoundCloudReleases() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <hr />
            <h3>Afunja Music <FaSoundcloud /></h3>
            {Object.keys(soundCloudProps).map(key => (
                <div key={soundCloudProps[key].numKey}>
                    <Iframe url={soundCloudProps[key].url}
                        scrolling="no"
                        className={classes.soundCloud}
                        display="initial"
                        position="relative" />
                </div>))}
        </div>
    );
}