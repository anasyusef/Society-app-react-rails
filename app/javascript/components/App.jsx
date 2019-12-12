import React, {useEffect} from "react"
import Auth from "j-toker"
import Button from '@material-ui/core/Button'
import Header from './Header'
import Login from './Login'
import TextField from '@material-ui/core/TextField';

function App() {

  useEffect(() => {
    Auth.configure({apiUrl: '/api/v1'});
  });

  return (
    <React.Fragment>
      <Header />
      <Login />
    </React.Fragment>
  );
}


export default App
