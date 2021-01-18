import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import AliceCarousel from 'react-alice-carousel'
import AfunjaSingle from './../../components/LinkFire/AfunjaSingle'
import FreeSingle from './../../components/LinkFire/FreeSingle'
import AfunjaInstSingle from './../../components/LinkFire/AfunjaInstSingle'
import FreeInstSingle from './../../components/LinkFire/FreeInstSingle'
import StoreIcons from './../../assets/img/store-cover.png'
import { FaShoppingCart } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: 10,
  },
  storeslimks: {
    marginBottom: '1rem',
    width: '100%',
  },
}));

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}\\${itemsCount}`;
};

const items = [
    <AfunjaSingle />,
    <FreeSingle />,
    <AfunjaInstSingle />,
    <FreeInstSingle />,
];

const Stores = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Buy <FaShoppingCart /></h3>
      <img src={StoreIcons} className={classes.storeslimks} alt="Stores" />
      <p>Available for Download and Streaming:</p>
      <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        // disableDotsControls
        disableSlideInfo={false}
        renderSlideInfo={renderSlideInfo}
        disableButtonsControls
        responsive={responsive}
        paddingLeft={0}
        items={items}
    />
    </div>
  );
}
export default Stores;
