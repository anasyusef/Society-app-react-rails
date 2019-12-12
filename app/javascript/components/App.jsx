import React, {useEffect} from "react";
import Auth from "j-toker";
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  useEffect(() => {
    Auth.configure({apiUrl: '/api/v1'});
  });

  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path='/' component={Login} /> */}
        <Route exact path='/' component={Signup} />
        <Route exact path='/auth/forgot_password' component={ForgotPassword} />
      </Switch>
    </Router>
  );
}


export default App
