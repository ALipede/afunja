import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Parallax } from 'react-parallax'

import AfunjaCoverImg from './../../assets/img/afunja-cover.jpg'

import './../../assets/scss/index.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 0,
    },
    paraH: {
        height: '400px',
    },
}));

export default function ParallaxHome() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={AfunjaCoverImg}
            bgImageAlt="Afunja Single Cover"
            strength={-200}
        >
            {/* Blur transition from min to max */}
            <div className={classes.paraH} />
        </Parallax>
    </div>
    )
}