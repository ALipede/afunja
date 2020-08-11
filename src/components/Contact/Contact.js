import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';

const pageColor = {
    pColor: '#999',
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 10,
    },
    listBkg: {
        "& a": {
            color: pageColor.pColor,
        },
        "& svg": {
            fill: pageColor.pColor,
        }
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h4>Contact</h4>
            <small><em>Please contact Afunja using the email below:</em></small>
            <List component="nav" aria-label="secondary mailbox folders" className={classes.listBkg}>
                <ListItemLink href="mailto:afunja@afunja.com?cc=alipede@igi-iroko.com
              &amp;subject=RE:%20Afunja%20Music%20-%20Contact
              &amp;body=Contact%20-%20AFUNJA%20MUSIC%20PUBLISHING."
                    alt="Email: afunja@afunja.com"
                    title="Email: afunja@afunja.com">
                    <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="afunja@afunja.com" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="tel:+44-7830-350-762" rel="nofollow" content="telephone=no" alt="Mob: +44-7830-350-762" title="Mob: +44-7830-350-762">
                    <ListItemIcon>
                        <PhonelinkRingIcon />
                    </ListItemIcon>
                    <ListItemText primary="+44 7830 350 762" />
                </ListItemLink>
            </List>
        </div>
    );
}