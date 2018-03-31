import React, {Component} from 'react';
import gql from 'graphql-tag';

import { graphql } from 'react-apollo'
import {FloatingActionButton} from 'material-ui';

import RemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';



const deleteResolution = gql`
  mutation deleteResolution($_id: String!) {
    deleteResolution(_id: $_id) {
      _id
    }
  }
`;

console.log(RemoveCircleOutline);

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
      <div>
        <i className="material-icons" onClick={this.onSubmit}><RemoveCircleOutline/></i> 
      </div>
    )
  }
};

export default graphql(deleteResolution, {
  name: "deleteResolution",
  options: {
    refetchQueries: ['resolutions']
  }
})(DeleteResolution);