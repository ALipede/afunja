import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconsSection001 from './IconsSection001.js';
import IconsSection002 from './IconsSection002.js';
import IconsSection003 from './IconsSection003.js';

const pageColor = {
    pColor: '#36A9E1',
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridListT: {
      height: '300px !important',
      marginRight: 20,
      background:
      'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.3) 100%)',
  },
  title: {
    color: '#999',
    fontWeight: 400,
    fontSize: '1.05em',
  },
  titleBar: {
    background:
      'none',
  },
}));

 const tileData = [
    {
        img: <IconsSection001 />,
        iconsNum: '1',
        title: 'Icons 001',
    },
    {
        img: <IconsSection003 />,
        iconsNum: '3',
        title: 'Myth of Being',
    },
    {
        img: <IconsSection002 />,
        iconsNum: '2',
        title: 'Icons 002',
    },
 ];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.iconsNum} className={classes.gridListT}>
            {tile.img}
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}