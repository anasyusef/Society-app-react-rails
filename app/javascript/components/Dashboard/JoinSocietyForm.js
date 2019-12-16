import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    const [societies, setSocieties] = React.useState(props.societies);
    const [society, setSociety] = React.useState(societies[0]);
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [snackBarInfo, setSnackBarInfo] = React.useState({message: '', variant: ''})
    Auth.configure({apiUrl: '/api/v1'})
    const authHeaders = Auth.retrieveData('authHeaders')
    const handleChange = event => {
        societies.forEach(society => {
            if (society.name === event.target.value) {
                setSociety(society);
            }
        })
      };

    const handleClick = event => {
        setOpen(true);
        setIsDisabled(true)
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/v1/registrations',
            dataType: 'JSON',
            headers: authHeaders,
            data: society,
        }).done(data => {
            setSnackBarInfo({message: `You have joined ${society.name} successfully!`, variant: 'success'})
            setSociety({...society, joined_members : society.joined_members + 1})
        }).fail(err => {
            setSnackBarInfo({message: `You are already joined in ${society.name}`, variant: 'error'})
            
        }).always(() => setIsDisabled(false));
        
    }
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Join Society
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-society-label">
          Society Name
        </InputLabel>
        <Select
          labelId="select-society-label"
          id="select-society"
          value={society.name}
          onChange={handleChange}
          fullWidth
        >
        {societies.map(society => {
            return <MenuItem key={society.id} value={society.name}>{society.name !== undefined ? titleize(society.name) : ""}</MenuItem>
        })}
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="location"
            name="location"
            label="Location"
            value={society.location !== undefined ? society.location : ""}
            disabled
            variant="outlined"
            fullWidth
            autoComplete="location"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="essentials"
            name="essentials"
            label="Essentials"
            disabled
            value={society.essentials !== undefined ? society.essentials : ""}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="brief_description"
            name="brief_description"
            value={society.brief_description !== undefined ? society.brief_description : ""}
            disabled
            multiline
            label="Brief Description"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="status"
            name="status"
            label="Status"
            value={society.is_active !== undefined ? society.is_active ? "Active" : "Inactive" : ""}
            disabled
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="joined-members"
            name="joined members"
            label="Joined members"
            value={`${society.joined_members} out of ${society.max_people}`}
            disabled
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                disabled={isDisabled}
                className={classes.button}
                onClick={handleClick}
            >
                Join
            </Button>
            {snackBarInfo.variant !== '' ? <CustomizedSnackbar open={open} variant={snackBarInfo.variant} message={snackBarInfo.message} onClose={handleClose}/> : null}
    </div>
    </Paper>
  );
}