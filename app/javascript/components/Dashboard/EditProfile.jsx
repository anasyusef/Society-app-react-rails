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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default function JoinSocietyForm(props) {
    const classes = useStyles();
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [firstName, setFirstName] = React.useState(props.current_user.first_name)
    const [lastName, setLastName] = React.useState(props.current_user.last_name)
    const [newPassword, setNewPassword] = React.useState('')
    const [newPasswordConfirm, setNewPasswordConfirm] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const [snackBarInfo, setSnackBarInfo] = React.useState({message: '', variant: ''})

    React.useEffect(() => {
      ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== newPassword) {
            return false;
        }
        return true;
      });
      return function cleanup() {
        ValidatorForm.removeValidationRule('isPasswordMatch');
      }
    })

    Auth.configure({apiUrl: '/api/v1'})
    const handleSubmit = event => {
        setOpen(true);
        setIsDisabled(true)
        Auth.updatePassword({
          password: newPassword,
          password_confirmation: newPasswordConfirm
          });
        Auth.updateAccount({
            first_name: firstName,
            last_name: lastName,
          }).then(() => {
            setSnackBarInfo({message: 'Profile updated', variant: 'success'})
          }).catch(() => {
            setSnackBarInfo({message: 'There was an error while updating your profile', variant: 'error'})
          });
        setIsDisabled(false)
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
      <ValidatorForm 
        className={classes.form}
        onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextValidator
            required
            id="first_name"
            name="first_name"
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            validators={['required']}
            errorMessages={['Field is required']}    
            variant="outlined"
            fullWidth
            autoComplete="location"
          />
        </Grid>
        <Grid item xs={6}>
          <TextValidator
            required
            id="last_name"
            name="last_name"
            label="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            validators={['required']}
            errorMessages={['Field is required']}
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
          <TextValidator
            id="new_password"
            name="new_password"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            label="New Password"
            validators={['required']}
            errorMessages={['Field is required']}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextValidator
            id="confirm_password"
            name="confirm_password"
            value={newPasswordConfirm}
            onChange={e => setNewPasswordConfirm(e.target.value)}
            type="password"
            label="Confirm Password"
            validators={['isPasswordMatch', 'required']}
            errorMessages={['Password does not match', 'Field is required']}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <div className={classes.buttons}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isDisabled}
                className={classes.button}
            >
                Update
            </Button>
            
    </div>
      </ValidatorForm>
      {snackBarInfo.variant !== '' ? <CustomizedSnackbar open={open} variant={snackBarInfo.variant} message={snackBarInfo.message} onClose={handleClose}/> : null}
    </Paper>
    </Dashboard>
  );
}