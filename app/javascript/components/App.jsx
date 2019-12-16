import React, {useEffect, useState} from 'react';
import Auth from 'j-toker';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory} from 'react-router-dom';


function App(props) {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory();
  useEffect(() => {
    Auth.configure({apiUrl: '/api/v1'});
    Auth.validateToken().then(user => {
      setIsAuthenticated(true)
      setCurrentUser(user);
    })
  });
  const handleAuthentication = isUserAuthenticated => {
    setIsAuthenticated(isUserAuthenticated)
  }



  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' isAuthenticated={isAuthenticated} >
          <Login onAuthentication={handleAuthentication}/>
        </PublicRoute>
        <PublicRoute exact path='/auth/sign_up' isAuthenticated={isAuthenticated}>
          <Signup />
        </PublicRoute>
        <Route exact path='/auth/forgot_password' isAuthenticated={isAuthenticated}>
          <ForgotPassword />
        </Route>
        <PrivateRoute exact path='/dashboard/' isAuthenticated={isAuthenticated} isLoading={false}>
          <Dashboard currentUser={currentUser}/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const PublicRoute = ({ isAuthenticated, ...props }) => {
  console.log(props)
  return isAuthenticated
      ? (<Redirect to="/dashboard" />)
      : (<Route {...props} />)
};

const PrivateRoute = ({ children, ...rest }) => {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export default App;
