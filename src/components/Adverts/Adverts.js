import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Crushco from "./../../assets/img/crushco.jpg";
import ByBiola from "./../../assets/img/bybiola.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cover: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    marginTop: 10,
  },
}));

export default function Adverts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h5>Adverts</h5>
      <a
        href="https://www.crushco.net/"
        target="_blank"
        alt="crushco.net"
        title="crushco.net"
      >
        <img src={Crushco} className={classes.cover} alt="crushco.net" />
      </a>

      <a
        href="https://www.etsy.com/uk/shop/ByBiola"
        target="_blank"
        alt="ByBiola"
        title="ByBiola"
      >
        <img src={ByBiola} className={classes.cover} alt="ByBiola" />
      </a>
    </div>
  );
}
