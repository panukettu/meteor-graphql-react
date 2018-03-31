import React from 'react';

import { TextField, RaisedButton, Paper } from 'material-ui'; 
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
      <form onSubmit={this.loginUser} style={styles.formContainer}>
        <Paper style={styles.paperContainer}>
        <h2>Login</h2>
            <TextField type="email" floatingLabelText="Username" ref={input => (this.email = input)}/>
            <TextField type="password" floatingLabelText="Password" ref={input => (this.password = input)}/>
            <RaisedButton label="Login" primary={true}/>
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
