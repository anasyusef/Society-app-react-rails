import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title'

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function JoinedSocietiesCard(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Joined Societies</Title>
      {props.joined_societies.length === 0 ? "You have not joined to any society" : (
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Essentials</TableCell>
            <TableCell>Brief Description</TableCell>
            <TableCell>Day</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.joined_societies.map(society => (
            <TableRow key={society.id}>
              <TableCell>{society.name}</TableCell>
              <TableCell>{society.location}</TableCell>
              <TableCell>{society.essentials}</TableCell>
              <TableCell>{society.brief_description}</TableCell>
              <TableCell>{society.day}</TableCell>
              <TableCell>{society.start_time}</TableCell>
              <TableCell>{society.end_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      )}
      
    </React.Fragment>
  );
}