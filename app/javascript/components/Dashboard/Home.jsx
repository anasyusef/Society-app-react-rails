import React, {useEffect} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Orders from './Orders';
import Auth from 'j-toker'
import NextEca from './NextEca'
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
                <NextEca />
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Orders />
                </Paper>
            </Grid>
        </Grid>
    </Dashboard>
    )
}

