import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Auth from 'j-toker'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Society React App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  
  const classes = useStyles();
  useEffect(() => {
    Auth.configure({apiUrl: '/api/v1'})
  })
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formValidation, setFormValidation] = useState({success: true, message: ''});

  const handleSubmit = (e) => {
    setIsButtonDisabled(true)
    e.preventDefault();
    Auth.emailSignIn({
        email: email,
        password: password,
      }).then(response => {
        setFormValidation({success: true, message: 'Successful Login'})
        props.onAuthentication(true)
        // history.push('/dashboard')
      }).catch(err => {
          setFormValidation({success: err.data.success, message: err.data.errors})
      }).then(() => {
        setIsButtonDisabled(false);
      })
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <ValidatorForm
                onSubmit={handleSubmit}
            >
            <Typography align="center" color={formValidation.success ? "inherit" : "error"}>
                {formValidation.message}
            </Typography>

          <TextValidator
            variant="outlined"
            margin="normal"
            onChange={(e) => {setFormValidation({success:true, message: ''}); setEmail(e.target.value)}}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            error={!formValidation.success}
            autoComplete="email"
            validators={['required', 'isEmail']}
            errorMessages={['Field is required', 'Email is not valid']}
            autoFocus
          />
          <TextValidator
            variant="outlined"
            margin="normal"
            onChange={(e) => {setFormValidation({success:true, message: ''}); setPassword(e.target.value)}}
            error={!formValidation.success}
            value={password}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            validators={['required']}
            errorMessages={['Field is required']}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            disabled={isButtonDisabled}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            <Link href="/auth/forgot_password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/auth/sign_up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          </ValidatorForm>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}