import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Parallax } from 'react-parallax'

import FreeCoverImg from './../../assets/img/free-cover.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20,
        "& small": {
            fontSize: '10px',
        }
    },
    paraH: {
        height: '500px',
        border: '1px solid rgba(0, 0, 0, 0.2)',
    },
}));

export default function ParallaxFree() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={FreeCoverImg}
                bgImageAlt="Free Cover"
                strength={-200}
            >
                {/* Blur transition from min to max */}
                <div className={classes.paraH} />
            </Parallax>
            <p><small><em>Artwork cover design for FREE Single.</em></small></p>
        </div>
    )
}