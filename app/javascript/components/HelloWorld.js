import React from "react"
import Auth from "j-toker"
import $ from "jquery"
class HelloWorld extends React.Component {

  componentDidMount() {
    Auth.configure({apiUrl: '/api/v1'});

    Auth.emailSignUp({
      email: 'test@test.com',
      password: '123456',
      password_confirmation: '123456'
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
