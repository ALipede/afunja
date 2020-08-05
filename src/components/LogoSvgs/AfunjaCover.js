import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import Aux from '../../assets/js/_Aux.js'

import AfunjaCoverImg from './../../assets/img/afunja-cover.jpg'

const pageColor = {
    pColor: '#fc0',
}
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 20,
        width: '100%',
    },
    cover: {
        width: '100%',
    },
}));

export default function AfunjaCover() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={AfunjaCoverImg} className={classes.cover} />
        </div>
    );
};
