import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function List({ prospects }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>College</TableCell>
            <TableCell>Birth</TableCell>
            <TableCell>Class</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prospects.map((prospect) => (
            <TableRow key={prospect.name}>
              <TableCell>
                <Avatar alt={prospect.name} src={prospect.photo} />
              </TableCell>
              <TableCell component="th" scope="row">
                <Button component={Link} to={`/prospects/${prospect.code}`}>{prospect.name}</Button>
              </TableCell>
              <TableCell component="th" scope="row">
                {prospect.position.toUpperCase()}
              </TableCell>

              <TableCell component="th" scope="row">
                {prospect.weight}
              </TableCell>

              <TableCell component="th" scope="row">
                {prospect.height}
              </TableCell>

              <TableCell component="th" scope="row">
                {prospect.college}
              </TableCell>

              <TableCell component="th" scope="row">
                {" "}
                {new Date(prospect.dateOfBirth).toLocaleDateString()}{" "}
              </TableCell>

              <TableCell component="th" scope="row">
                {prospect.year}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
