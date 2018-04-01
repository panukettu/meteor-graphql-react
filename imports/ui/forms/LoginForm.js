import React from 'react';

import { TextField, RaisedButton, Paper } from 'material-ui'; 
import { Accounts } from 'meteor/accounts-base';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.email = '';
    this.password = '';
  }
  
  loginUser = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email, this.password, 
      error => {
        if(!error) { 
          this.props.client.resetStore();
        }
        console.log(error); 
      }
    );
  }

  onEmailChange = (e, val) => {
    this.email = val;
  }

  onPasswordChange = (e, val) => {
    this.password = val;
  }

  render() {
    return (
      <form onSubmit={this.loginUser} style={styles.formContainer}>
        <Paper style={styles.paperContainer}>
        <h2>Login</h2>
            <TextField type="email" floatingLabelText="Email" onChange={this.onEmailChange.bind(this)}/>
            <TextField type="password" floatingLabelText="Password" onChange={this.onPasswordChange.bind(this)}/>
            <RaisedButton type="submit" label="Enter" primary={true}/>
        </Paper>
      </form>
    )
  }
}

const styles = {
  formContainer: {
    margin: 5,
  },
  paperContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  }
}
