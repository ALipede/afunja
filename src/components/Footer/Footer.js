import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { FaReact } from "react-icons/fa";

const pageColor = {
  dColor: "#666",
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    bottom: 0,
    width: "100%",
    color: pageColor.dColor,
    paddingTop: 0,
    paddingBottom: 40,
    textAlign: "center",
  },
  copyright: {
    "& small": {
      fontSize: "10px",
      color: pageColor.dColor,
    },
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.copyright}>
        <small>
          {
            "All rights reserved artwork and music copyright © Afunja Music Publishing Ltd Ⓟ. 1988-"
          }
          {1900 + new Date().getYear()}
          {"am. "}
          <br />
          {/* {" | "} */}
          <Link
            href="https://afunja.com/privacy-statement/privacy-statement.html"
            alt="Privacy Statement"
            title="Privacy Statement"
            target="_parent"
            rel="noopener noreferrer"
          >
            Privacy Statement
          </Link>
          {" | "}
          <sup>
            <FaReact />
          </sup>
          {
            " Website design & development by A.Lipede - igi iroko | multimedia - "
          }
          <Link
            href="https://igi-iroko.com/"
            alt="igi-iroko.com"
            title="igi-iroko.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"www.igi-iroko.com"}
          </Link>
        </small>
      </Typography>
    </div>
  );
}
