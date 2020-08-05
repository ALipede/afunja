import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import JojonaIssina from './../../assets/img/jojona-issina.svg'

const pageColor = {
    pColor: '#eee',
}
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 0,
        paddingBottom: 10,
        width: '100%',
    },
    logo: {
        width: '100%',
        fill: pageColor.pColor,
        opacity: 0.7,
    },
}));

    export default function JojonaIssinaSvg() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <JojonaIssina className={classes.logo} />
        </div>
    );
};
