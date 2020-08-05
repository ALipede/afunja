import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import AfunjaLogo from './../../assets/img/afunja-logos.svg'

const pageColor = {
    pColor: '#999',
}
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
    },
    logo: {
        width: '100%',
        fill: pageColor.pColor,
        strokeWidth: '0.75',
        opacity: 0.7,
    },
}));

export default function AfunjaLogoSvg() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AfunjaLogo className={classes.logo} />
        </div>
    );
};
