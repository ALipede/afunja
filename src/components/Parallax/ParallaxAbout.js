import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Parallax } from 'react-parallax'

import AfunjaAboutImg from './../../assets/img/afunja-about.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20,
    },
    paraH: {
        height: '400px',
    },
}));

export default function ParallaxAbout() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={AfunjaAboutImg}
            bgImageAlt="About Afunja"
            strength={-200}
        >
            {/* Blur transition from min to max */}
            <div className={classes.paraH} />
        </Parallax>
    </div>
    )
}