import React from 'react';
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard'
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


export default function ContactSocietyAdministrator(props) {
    const classes = useStyles();
    const [societyAdministrators, setSocietyAdministrators] = React.useState(props.society_administrators);
    const [societyAdministrator, setSocietyAdministrator] = React.useState(societyAdministrators[0]);
    const [isDisabled, setIsDisabled] = React.useState(false);
    Auth.configure({apiUrl: '/api/v1'})
    const authHeaders = Auth.retrieveData('authHeaders')
    const handleChange = event => {
        societyAdministrators.forEach(societyAdministrator => {
            if (societyAdministrator.id === event.target.value) {
                setSocietyAdministrator(societyAdministrator);
            }
        })
      };

    const handleClick = event => {
        setIsDisabled(true)
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/v1/registrations',
            dataType: 'JSON',
            headers: authHeaders,
            data: society,
        }).done(data => {
            console.log(data);
        }).fail(err => {
            console.log(err);
        });
        setIsDisabled(false);
    }
  return (
      <Dashboard>
        <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
            Contact Society Administrator
        </Typography>
        <Grid container spacing={3}>
            
            <Grid item xs={12} sm={6}>
            <TextField
                id="subject"
                name="subject"
                label="Subject"
                variant="outlined"
                required
                fullWidth
                autoComplete="subject"
            />
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="select-society-administrator-label">
                    To
                    </InputLabel>
                    <Select
                    labelId="select-society-administrator-label"
                    id="select-society"
                    value={societyAdministrator.id}
                    onChange={handleChange}
                    fullWidth
                    >
                    {societyAdministrators.map(societyAdministrator => {
                        return <MenuItem key={societyAdministrator.id} value={societyAdministrator.id}>{`${societyAdministrator.first_name} ${societyAdministrator.last_name}`}</MenuItem>
                    })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="Content"
                name="Content"
                multiline
                label="Content"
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
                    Submit
                </Button>
        </div>
        </Paper>
    </Dashboard>
  );
}