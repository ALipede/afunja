import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

// ICONS Components:
import IconModalA from "./IconsOne/IconModalA.js";
import IconModalB from "./IconsOne/IconModalB.js";
import IconModalC from "./IconsOne/IconModalC.js";
import IconModalD from "./IconsOne/IconModalD.js";
import IconModalE from "./IconsOne/IconModalE.js";
import IconModalF from "./IconsOne/IconModalF.js";
import IconModalG from "./IconsOne/IconModalG.js";
import IconModalH from "./IconsOne/IconModalH.js";

import IconModalI from "./IconsOne/IconModalI.js";
import IconModalJ from "./IconsOne/IconModalJ.js";
import IconModalK from "./IconsOne/IconModalK.js";
import IconModalL from "./IconsOne/IconModalL.js";
import IconModalM from "./IconsOne/IconModalM.js";
import IconModalN from "./IconsOne/IconModalN.js";
import IconModalO from "./IconsOne/IconModalO.js";
import IconModalP from "./IconsOne/IconModalP.js";

import IconModalQ from "./IconsOne/IconModalQ.js";
import IconModalR from "./IconsOne/IconModalR.js";
import IconModalS from "./IconsOne/IconModalS.js";
import IconModalT from "./IconsOne/IconModalT.js";
import IconModalU from "./IconsOne/IconModalU.js";
import IconModalV from "./IconsOne/IconModalV.js";
import IconModalW from "./IconsOne/IconModalW.js";
import IconModalX from "./IconsOne/IconModalX.js";

import IconModalY from "./IconsOne/IconModalY.js";
import IconModalZ from "./IconsOne/IconModalZ.js";
import IconModalZa from "./IconsOne/IconModalZa.js";
import IconModalZb from "./IconsOne/IconModalZb.js";

function createData(colKey, col1, col2, col3, col4, col5, col6, col7, col8) {
  return { colKey, col1, col2, col3, col4, col5, col6, col7, col8 };
}

const rows = [
    createData(1, <IconModalA />, <IconModalB />, <IconModalC />, <IconModalD />, <IconModalE />, <IconModalF />, <IconModalG />, <IconModalH />),
    createData(2, <IconModalI />, <IconModalJ />, <IconModalK />, <IconModalL />, <IconModalM />, <IconModalN />, <IconModalO />, <IconModalP />),
    createData(3, <IconModalQ />, <IconModalR />, <IconModalS />, <IconModalT />, <IconModalU />, <IconModalV />, <IconModalW />, <IconModalX />),
    createData(4, <IconModalY />, <IconModalZ />, <IconModalZa />, <IconModalZb />),
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

export default function IconsSection001() {
    const classes = useStyles2();
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(4);
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
