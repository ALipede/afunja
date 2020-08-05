import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

// ICONS Components:
import IconModalA from "./IconsTwo/IconModalA.js";
import IconModalB from "./IconsTwo/IconModalB.js";
import IconModalC from "./IconsTwo/IconModalC.js";
import IconModalD from "./IconsTwo/IconModalD.js";
import IconModalE from "./IconsTwo/IconModalE.js";
import IconModalF from "./IconsTwo/IconModalF.js";
import IconModalG from "./IconsTwo/IconModalG.js";
import IconModalH from "./IconsTwo/IconModalH.js";

import IconModalI from "./IconsTwo/IconModalI.js";
import IconModalJ from "./IconsTwo/IconModalJ.js";
import IconModalK from "./IconsTwo/IconModalK.js";
import IconModalL from "./IconsTwo/IconModalL.js";
import IconModalM from "./IconsTwo/IconModalM.js";
import IconModalN from "./IconsTwo/IconModalN.js";
import IconModalO from "./IconsTwo/IconModalO.js";
import IconModalP from "./IconsTwo/IconModalP.js";

import IconModalQ from "./IconsTwo/IconModalQ.js";
import IconModalR from "./IconsTwo/IconModalR.js";
import IconModalS from "./IconsTwo/IconModalS.js";

function createData(colKey, col1, col2, col3, col4, col5, col6, col7, col8) {
  return { colKey, col1, col2, col3, col4, col5, col6, col7, col8 };
}

const rows = [
    createData(1, <IconModalA />, <IconModalB />, <IconModalC />, <IconModalD />, <IconModalE />, <IconModalF />, <IconModalG />, <IconModalH />),
    createData(2, <IconModalI />, <IconModalJ />, <IconModalK />, <IconModalL />, <IconModalM />, <IconModalN />, <IconModalO />, <IconModalP />),
    createData(3, <IconModalQ />, <IconModalR />, <IconModalS />),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const pageColor = {
  pColor: '#36A9E1',
}

const useStyles2 = makeStyles({
  table: {
    maxWidth: 480,
    minWidth: 480,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tableRow: {
    "& td": {
        borderBottom: 'none',
        padding: 0,
        margin: 5,
        width: 50,
        height: 50,
        display: 'inline-flex',
    },
  },
});

export default function IconsSection002() {
    const classes = useStyles2();
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(3);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer className={classes.root}>
      <Table className={classes.table} aria-label="table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.colKey} className={classes.tableRow}>
                <TableCell align="right">{row.col1}</TableCell>
                <TableCell align="right">{row.col2}</TableCell>
                <TableCell align="right">{row.col3}</TableCell>
                <TableCell align="right">{row.col4}</TableCell>
                <TableCell align="right">{row.col5}</TableCell>
                <TableCell align="right">{row.col6}</TableCell>
                <TableCell align="right">{row.col7}</TableCell>
                <TableCell align="right">{row.col8}</TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 50 * emptyRows }}>
              <TableCell colSpan={8} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
