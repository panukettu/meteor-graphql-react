import React, {Component} from 'react';
import gql from 'graphql-tag';

import { graphql } from 'react-apollo'

import RemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import ActionInfo from 'material-ui/svg-icons/action/info';



const deleteResolution = gql`
  mutation deleteResolution($_id: String!) {
    deleteResolution(_id: $_id) {
      _id
    }
  }
`;

class DeleteResolution extends React.Component {
  onSubmit = () => {
    console.log(this.props._id);
    this.props.deleteResolution({
      variables: {
        _id: this.props._id
      }
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <ActionInfo onClick={this.onSubmit}/>
    )
  }
};

export default graphql(deleteResolution, {
  name: "deleteResolution",
  options: {
    refetchQueries: ['resolutions']
  }
})(DeleteResolution);