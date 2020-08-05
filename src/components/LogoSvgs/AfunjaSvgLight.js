import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Afunja from './../../assets/img/afunja.svg'

const pageColor = {
    pColor: '#eee',
}
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 20,
        paddingBottom: 10,
        width: '100%',
    },
    logo: {
        width: '100%',
        "& g": {
            stroke: pageColor.pColor,
            strokeWidth: '11.348',
            width: '100%',
        },
    },
}));

    export default function AfunjaSvgLight() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Afunja className={classes.logo} />
        </div>
    );
};
