import React, {useEffect} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import JoinSocietiesCard from './JoinedSocietiesCard'
import Auth from 'j-toker'
import TotalSocieties from './TotalSocieties'
import useStyles from './styles';
import Dashboard from './Dashboard'
import SocietyCard from './JoinedSocieties/SocietyCard';

export default function Home(props) {
    
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
    <Dashboard>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5">Hi {props.current_user.first_name}, { props.current_user.sign_in_count > 1 ? "Welcome back" : "Welcome to the Society App"}!</Typography>
            </Grid>
            {/* <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                </Paper>
            </Grid> */}
            <Grid item xs={9}>
                <Paper className={classes.paper}>
                    <JoinSocietiesCard joined_societies = {props.joined_societies}/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Paper className={fixedHeightPaper}>
                <TotalSocieties total_societies={props.joined_societies.length} />
                </Paper>
            </Grid>
            
            
        </Grid>
    </Dashboard>
    )
}

