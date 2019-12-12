import React from "react"
import Auth from "j-toker"
import $ from "jquery"
class HelloWorld extends React.Component {

  componentDidMount() {
    Auth.configure({apiUrl: '/api/v1'});

    Auth.emailSignUp({
      first_name: 'Test',
      last_name: 'Test',
      email: 'test12345@12test.com',
      password: '123456',
      password_confirmation: '123456',
      'role_name': 'member',
    });
    
  }

  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

export default HelloWorld
