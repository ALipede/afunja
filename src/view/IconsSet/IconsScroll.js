import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconsSection001 from './IconsSection001.js';
import IconsSection002 from './IconsSection002.js';
import IconsSection003 from './IconsSection003.js';

const pageColor = {
  pColor: '#999',
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    color: pageColor.pColor,
    fontFamily: '"Orbitron", sans-serif',
  },
  tableCellTd: {
    verticalAlign: 'top',
  },
});

function createData(num, icon001, icon003, icon002) {
  return { num, icon001, icon003, icon002 };
}

const rows = [
  createData(1, <IconsSection001 />, <IconsSection003 />, <IconsSection002 />),
];

export default function IconsScroll() {
  const classes = useStyles();

  return (
    <div>
      <h3>Afunja icons</h3>
      <small><em>Digital Arts animated gif by A.Lipede. Please click on icons to view:</em></small>
      <TableContainer>
        <Table className={classes.table} aria-label="icons table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>ICONS 001</TableCell>
              <TableCell className={classes.tableCell}>Myth of Being</TableCell>
              <TableCell className={classes.tableCell}>ICONS 002</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.num}>
                <TableCell className={classes.tableCellTd}>{row.icon001}</TableCell>
                <TableCell className={classes.tableCellTd}>{row.icon003}</TableCell>
                <TableCell className={classes.tableCellTd}>{row.icon002}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
