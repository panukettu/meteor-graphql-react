import React from 'react';

import { Accounts } from 'meteor/accounts-base';

export default class LoginForm extends React.Component {
  loginUser = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(this.email.value, this.password.value, 
      error => {
        if(!error) { 
          this.props.client.resetStore();
        }
        console.log(error); 
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.loginUser}>
        Email<br/>
        <input type="email" ref={input => (this.email = input)}/><br/>
        Password<br/>       
        <input type="password" ref={input => (this.password = input)}/>
        <button type="submit">Login user</button>
      </form>
    )
  }
}
