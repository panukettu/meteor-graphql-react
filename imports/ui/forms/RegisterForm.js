import React from 'react';

import { TextField, RaisedButton, Paper, FloatingActionButton } from 'material-ui'; 
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends React.Component {
  registerUser = (e) => {
    e.preventDefault();

    Accounts.createUser({
      email: this.email,
      password: this.password
    }, error => {
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
      <form onSubmit={this.registerUser} style={styles.formContainer}>
        <Paper style={styles.paperContainer}>
          <h2>Register</h2>
          <TextField type="email" floatingLabelText="Email" onChange={this.onEmailChange.bind(this)}/>
          <TextField type="password" floatingLabelText="Password" onChange={this.onPasswordChange.bind(this)}/>
          <RaisedButton type="submit" label="Register" secondary={true}/>
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