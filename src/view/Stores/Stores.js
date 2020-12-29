import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table } from 'reactstrap'

import AfunjaSingle from './../../components/LinkFire/AfunjaSingle'
import FreeSingle from './../../components/LinkFire/FreeSingle'
import AfunjaInstSingle from './../../components/LinkFire/AfunjaInstSingle'
import FreeInstSingle from './../../components/LinkFire/FreeInstSingle'
import { FaShoppingCart, FaHandPointRight } from 'react-icons/fa'
import StoreIcons from './../../assets/img/store-cover.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: 10,
  },
  store: {
    display: 'flex',
    "& td": {
      padding: 0,
      marginRight: 20,
      width: 300,
      maxWidth: 300,
    }
  },
  cover: {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.2)',
  },
  stores: {
    marginBottom: '1rem',
    width: '100%',
  },
}));

const Stores = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>New Releases <FaShoppingCart /></h3>
      <img src={StoreIcons} className={classes.stores} alt="Stores" />
      <p>Available for Download and Streaming <FaHandPointRight style={{ marginLeft: 10, marginTop: -5, color: '#0c6da4' }} /></p>
      <Table responsive>
        <tbody>
          <tr className={classes.store}>
            <td><AfunjaSingle /></td>
            <td><FreeSingle /></td>
            <td><AfunjaInstSingle /></td>
            <td><FreeInstSingle /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Stores;
