import React from 'react';
import { RaisedButton } from 'material-ui';

export default Logout = (props) => (
  <div style={styles.container}>
    <RaisedButton 
      type="submit"
      onClick={() => {
        Meteor.logout();
        props.client.resetStore();
      }} 
      label="Logout" 
      secondary={true}
    />
  </div>
);

const styles = {
  container: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  }
}
