import React, {useEffect} from 'react';
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import Auth from 'j-toker';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles';
import titleize from 'titleize'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
export default function Dashboard(props) {

  useEffect(() => {
    Auth.configure({apiUrl: '/api/v1'});
  })

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const menuAction = window.location.pathname.split('/').slice(-1)[0]
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {titleize(menuAction.split('_').join(' '))}
          </Typography>
          <Button onClick={() => {Auth.signOut(); window.location.href = '/auth/sign_in'}} color="inherit">Sign out</Button>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink href="home" selected={menuAction === 'home'}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemLink>
          <ListItemLink href="join_society" selected={menuAction === 'join_society'}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Join Society" />
          </ListItemLink>
          <ListItemLink href="joined_societies" selected={menuAction === 'joined_societies'}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Joined Societies" />
          </ListItemLink>
          <ListItemLink href="contact_society_administrator" selected={menuAction === 'contact_society_administrator'}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Society Administrator"/>
          </ListItemLink>
          <ListItemLink href="edit_profile" selected={menuAction === 'edit_profile'}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItemLink>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        {props.children}
        </Container>
      </main>
    </div>
  );
}