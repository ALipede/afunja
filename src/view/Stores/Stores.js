import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table } from 'reactstrap'

import AfunjaSingle from './../../components/LinkFire/AfunjaSingle'
import AfunjaInstSingle from './../../components/LinkFire/AfunjaInstSingle'

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    },
    store: {
        display: 'flex',
        "& td": {
            padding: 0,
            margin: 2,
            width: 300,
            maxWidth: 300,
          }
    }
  }));

const Stores = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
    <Table responsive>
      <tbody>
        <tr className={classes.store}>
          <td><AfunjaSingle /></td>
          <td><AfunjaInstSingle /></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Stores;
