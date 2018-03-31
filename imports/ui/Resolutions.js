import React, { Component } from "react";

import { FloatingActionButton, TextField } from "material-ui";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { List, ListItem, makeSelectable } from 'material-ui/List';



const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class Resolutions extends Component {
  submitForm = () => {
    this.props
      .createResolution({
        variables: {
          name: this.name
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange(e, value) {
    this.name = value;
  }

  render() {
    return (
      <div id="resolutionsContainer" style={styles.resolutionsContainer}>
        <TextField
          floatingLabelText="Resolution"
          onChange={this.handleChange.bind(this)}
        />
        <FloatingActionButton onClick={this.submitForm} mini={true} />
        <List>
          {this.props.resolutions.map(resolution => (
            <ListItem key={resolution._id}>
              {resolution.name}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ["resolutions"]
  }
})(Resolutions);

const styles = {
  resolutionsContainer: {
    margin: 10,
  }
}
