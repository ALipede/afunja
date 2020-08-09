import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Iframe from 'react-iframe'

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
        height: 30,
        width: '100%',
        backgroundColor: 'rgb(245 245 245)',
        border: '5px solid rgb(245 245 245)',
    }
});

// SoundCloud Props:
const soundCloudProps = {
    IronyOfPeace: {
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/70735660&color=%23ff5500&inverse=false&auto_play=false&show_user=true",
        numKey: 1,
    },
    cia: {
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291824556&color=%23ff5500&inverse=false&auto_play=false&show_user=true",
        numKey: 2,
    },
    civilPropaganda: {
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/292886934&color=%23ff5500&inverse=false&auto_play=false&show_user=true",
        numKey: 3,
    },
    toBe: {
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/296206940&color=%23ff5500&inverse=false&auto_play=false&show_user=true",
        numKey: 4,
    },
};

export default function SoundCloudList() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <hr />
            <h3>Afunja Studio Demos</h3>
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