import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Crushco from './../../assets/img/crushco.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    cover: {
        width: '100%',
        border: '1px solid #999',
    },
}));

export default function Adverts() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h5>Adverts</h5>
            <a href="http://www.crushco.net/" target="_blank" alt="www.crushco.net"><img src={Crushco} className={classes.cover} alt="www.crushco.net" /></a>
        </div>
    );
};
