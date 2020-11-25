import React from 'react'
import YouTube from 'react-youtube'
import { makeStyles } from '@material-ui/core/styles'

const opts = {
    height: 340,
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        width: '100%',
        marginTop: 10,
    },
    youTubePlayer: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        marginBottom: 10,
    }
});

export default function YouTubeAfunja() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>Afunja Videos</h3>
            <p><small><em>YouTube Channel</em></small></p>
            <YouTube
                videoId="KxSQACrWy6M"
                opts={opts}
                className={classes.youTubePlayer}
            />
            <p>
                <small><em>AFUNJA Music</em> - <strong>Afunja</strong></small>
            </p>

            <hr />

            <YouTube
                videoId="MEilIdN8ixk"
                opts={opts}
                className={classes.youTubePlayer}
            />
            <p>
                <small><em>AFUNJA Music</em> - <strong>Colours</strong> (Instrumental)
                <br />
                    <em>Featuring Dele Sosimi on keyboard solo, Kate Luxmoore on clarinet and Lekan Babalola on percussion.</em></small>
            </p>

            <hr />

            <YouTube
                videoId="_weGxRrwx64"
                opts={opts}
                className={classes.youTubePlayer}
            />
            <p>
                <small><em>AFUNJA Music</em> - <strong>Afunja</strong></small>
            </p>
        </div>
    );
}
