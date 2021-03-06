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
    const handleClick = (event) => {
      props.onQuit(event.currentTarget.id)
    }
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
                    <br/>
                    Society Administrator: {props.society_administrator.first_name} {props.society_administrator.last_name}
                    </Typography>
                    <Typography variant="body2" component="p">
                    <b>Description:</b> {props.brief_description}
                    <br />
                    <b>Essentials:</b> {props.essentials}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button id={props.id} variant="contained" color="secondary" size="small" onClick={handleClick}>Quit</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}