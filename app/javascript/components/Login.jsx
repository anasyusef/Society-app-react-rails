import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Auth from 'j-toker';

const useStyles = makeStyles(theme => ({
    root: {
      textAlign: 'center',
      marginTop: 20
    },

    textField: {
        width: 300,
    },
    loginButton: {
        width: 200
    },
  }));

export default function Login() {

    const classes = useStyles();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [formInfo, setFormInfo] = useState({message: '', color: 'primary'});
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const handleClick = () => {
        setButtonDisabled(true)
        Auth.emailSignIn({
            email: email,
            password: password,
          }).then(function(response) {
            setFormInfo({message: 'Successful Login', color: 'primary'})
            
          }).catch(err => {
            setFormInfo({message: err.data.errors, color: 'error'})
          }).then(() => {
              setButtonDisabled(false)
          });
    }

    return (
        <div className={classes.root}>
        <Grid container spacing={3} alignItems='center' >
            <Grid item xs={12} >
                <Typography color={formInfo.color}>
                    {formInfo.message}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField className={classes.textField} id="email" label="Email" onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <TextField className={classes.textField} id="password" type="password"  label="Password" onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
            <Button className={classes.loginButton} onClick={handleClick} variant="contained" color="primary" disabled={buttonDisabled}>Login</Button>
            </Grid>
        </Grid>
        </div>
    );
}