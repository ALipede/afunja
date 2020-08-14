import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Iframe from 'react-iframe'

// // FaMailchimp
import { FaMailchimp } from "react-icons/fa";

const pageColor = {
  dColor: '#666',
}
const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    position: 'relative',
    display: 'contents',
  },
  mailChimp: {
    width: '100%',
    height: 375,
    position: 'relative',
    marginTop: 7,
    border: 0,
    overflow: 'visible',
    display: 'initial',
  }
});

export default function MailChimp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4>Subscribe to Afunja</h4>
      <small><FaMailchimp /> <em>Mailchimp secure mailing list.</em></small>
      <Iframe url="https://afunja.com/subscribe/subscribe.html"
        scrolling="yes"
        className={classes.mailChimp}
      />
    </div>
  );
}