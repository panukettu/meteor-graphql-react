import React from 'react';

import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends React.Component {
  registerUser = (e) => {
    e.preventDefault();

    Accounts.createUser({
      email: this.email.value,
      password: this.password.value
    }, error => {
      if(!error) { 
        this.props.client.resetStore();
      }
      console.log(error); 
    }
    );
  }

  render() {
    return (
      <form onSubmit={this.registerUser}>
        Email<br/>
        <input type="email" ref={input => (this.email = input)}/><br/>
        Password<br/>       
        <input type="password" ref={input => (this.password = input)}/>
        <button type="submit">Register user</button>
      </form>
    )
  }
}