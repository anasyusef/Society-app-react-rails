import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dashboard from './Dashboard'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './styles'
import Auth from 'j-toker';
import axios from 'axios'
import $ from 'jquery'
import titleize from 'titleize';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedSnackbar from '../CustomizedSnackbar';

export default function JoinSocietyForm(props) {
    const classes = useStyles();
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [firstName, setFirstName] = React.useState(props.current_user.first_name)
    const [lastName, setLastName] = React.useState(props.current_user.last_name)
    const [open, setOpen] = React.useState(false);
    const [snackBarInfo, setSnackBarInfo] = React.useState({message: '', variant: ''})
    Auth.configure({apiUrl: '/api/v1'})
    const handleClick = event => {
        setOpen(true);
        setIsDisabled(true)
        Auth.updateAccount({
            first_name: firstName,
            last_name: lastName,
          });
        Auth.updatePassword({
        password: '1234567890',
        password_confirmation: '1234567890'
        });
        
    }
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  return (
      <Dashboard>
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Edit Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="first_name"
            name="first_name"
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            variant="outlined"
            fullWidth
            autoComplete="location"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="last_name"
            name="last_name"
            label="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            value={props.current_user.email}
            disabled
            multiline
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="new_password"
            name="new_password"
            type="password"
            label="New Password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="confirm_password"
            name="confirm_password"
            type="password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <div className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                disabled={isDisabled}
                className={classes.button}
                onClick={handleClick}
            >
                Update
            </Button>
            {snackBarInfo.variant !== '' ? <CustomizedSnackbar open={open} variant={snackBarInfo.variant} message={snackBarInfo.message} onClose={handleClose}/> : null}
    </div>
    </Paper>
    </Dashboard>
  );
}