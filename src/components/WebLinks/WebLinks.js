import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    lists: {
        padding: 0,
        margin: 0,
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
    },
}));

// LINKS Props:
const webLinksProps = {
    ObiOkigbo: {
        name: "obiokigboartist.com",
        url: "https://www.obiokigboartist.com",
        alt: "OBI OKIGBO ARTIST",
        numKey: 1,
    },
    Jango: {
        name: "lekanbabalola.com",
        url: "http://www.lekanbabalola.com",
        alt: "LEKAN BABALOLA",
        numKey: 2,
    },
};

function WebLinks(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h5>Links</h5>
            {Object.keys(webLinksProps).map(key => (
                <List key={webLinksProps[key].numKey} className={classes.lists}>
                    <Link href={webLinksProps[key].url} alt={webLinksProps[key].alt} title={webLinksProps[key].alt} target="_blank" >
                        <ListItem>
                            {webLinksProps[key].name}
                        </ListItem>
                    </Link>
                </List>
            ))}
        </div>)
}
export default WebLinks;

