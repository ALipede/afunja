import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MailchimpReact from 'mailchimp-react'

// FaMailchimp
import { FaMailchimp } from "react-icons/fa";

const pageColor = {
  pColor: '#666',
}
const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      marginBottom: 30,
  },
  mailChimp: {
    paddingTop: 10,
    "& input": {
      width: '100%',
      fontFamily: '"Lato", sans-serif',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgb(246 247 211)',
      marginBottom: 5,
      lineHeight:'1.8rem',
      paddingLeft: 10,
      paddingRight: 10,
    },
    "& button": {
      color: pageColor.pColor,
      border: '1px solid rgba(120, 120, 120, 0.3)',
      padding: '10px 20px',
      position: 'static',
      background: '#fc0',
      boxSizing: 'border-box',
      flexShrink: 0,
      fontFamily: '"Orbitron", sans-serif',
      textTransform: 'lowercase',
      letterSpacing: 2,
      "&:hover": {
        background: '#666',
        color: '#eee',
      },
    }
  }
}));

export default function MailChimp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <h4>Subscribe </h4>
    <small><FaMailchimp /> Mailchimp mailing list.</small>
    <MailchimpReact className={classes.mailChimp} action="https://afunja.us17.list-manage.com/subscribe/post?u=7271b01c847bf695e0d59d4ce&amp;id=7b7c023b59" />
  </div>
  );
}

