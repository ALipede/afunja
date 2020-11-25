import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import EndSarsImg from './../../assets/img/afunja-endsars.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        marginTop: 20,
        marginBottom: 20,
    },
    cover: {
        width: '100%',
        border: '1px solid rgba(0, 0, 0, 0.2)',
    },
}));

export default function EndSars() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={EndSarsImg} className={classes.cover} alt="#EndSars" />
        </div>
    );
};
