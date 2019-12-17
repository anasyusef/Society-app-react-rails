import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalSocieties(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Societies Joined</Title>
      <Typography component="p" variant="h2">
        {props.total_societies}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}