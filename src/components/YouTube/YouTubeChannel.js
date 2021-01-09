import React from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles'

import { FaYoutube } from "react-icons/fa"

const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        width: '100%',
        marginTop: 10,
    },
    youTubePlayer: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        marginBottom: 10,
        backgroundColor: '#333'
    }
});

export default function YouTubeChannel() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>Afunja Videos <FaYoutube /></h3>
            <p><small><em>YouTube Channel. Please refresh page if video does not appear. *</em></small></p>
            <ReactPlayer
                url="https://www.youtube.com/playlist?list=PLLdMtVL7UT6ZJQNnTPHKMwQBNehwLIydv"
                width="100%"
                className={classes.youTubePlayer}
            />
        </div>
    );
}