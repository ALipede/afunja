import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table } from 'reactstrap'

import AfunjaSingle from './../../components/LinkFire/AfunjaSingle'
import AfunjaInstSingle from './../../components/LinkFire/AfunjaInstSingle'
import { FaShoppingCart } from 'react-icons/fa'
import EndSars from './../../assets/img/afunja-endsars.jpg'

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
  },
  cover: {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    marginBottom: 20,
},
}));

const Stores = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <h3>Afunja Releases <FaShoppingCart /></h3>
      <p>Available for Download and Streaming.</p>
      <Table responsive>
        <tbody>
          <tr className={classes.store}>
            <td><AfunjaSingle /></td>
            <td><AfunjaInstSingle /></td>
          </tr>
        </tbody>
      </Table>

      <img src={EndSars} className={classes.cover} alt="#EndSars" />
    </div>
  );
}

export default Stores;
