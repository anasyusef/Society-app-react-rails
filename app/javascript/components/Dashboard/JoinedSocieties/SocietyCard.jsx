import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function SocietyCard(props) {
    const classes = useStyles();
    return(
        <Grid item xs={4}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {props.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {props.day}s from {props.start_time} to {props.end_time}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.location}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {props.brief_description}
                    <br />
                    <b>ESSENTIALS:</b> {props.essentials}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" size="small">Quit</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}