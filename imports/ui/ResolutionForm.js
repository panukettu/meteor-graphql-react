import React, { Component } from 'react';

import { FloatingActionButton, TextField } from 'material-ui';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  submitForm = () => {
    this.props.createResolution({
      variables: {
        name: this.name
      }
    }).catch(error => {
      console.log(error)
    });
  }

  handleChange(e, value) {
    this.name = value;
  }

  render() {
    return (
      <div>
        <TextField floatingLabelText="Resolution" onChange={this.handleChange.bind(this)}/>
        <FloatingActionButton onClick={this.submitForm} mini={true}/>
      </div>
    )
  }
}

export default graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ['resolutions']
  }
})(ResolutionForm);
