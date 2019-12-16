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

export default function Home() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
    <Dashboard>
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                <TotalSocieties />
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <JoinSocietiesCard />
                </Paper>
            </Grid>
        </Grid>
    </Dashboard>
    )
}

