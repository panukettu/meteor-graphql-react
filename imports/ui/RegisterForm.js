import React from 'react';

import { TextField, RaisedButton, Paper, FloatingActionButton } from 'material-ui'; 
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
      <form onSubmit={this.registerUser} style={styles.formContainer}>
        <Paper style={styles.paperContainer}>
          <h2>Register</h2>
          <TextField floatingLabelText="Email" ref={input => (this.email = input)}/>
          <TextField floatingLabelText="Password" ref={input => (this.email = input)}/>
          <RaisedButton label="Register" secondary={true}/>
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