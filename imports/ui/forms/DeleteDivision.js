import React, {Component} from 'react';
import gql from 'graphql-tag';

import { graphql } from 'react-apollo'

import RemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import ActionInfo from 'material-ui/svg-icons/action/info';



const deleteDivision = gql`
  mutation deleteDivision($_id: String!) {
    deleteDivision(_id: $_id) {
      _id
    }
  }
`;

class DeleteDivision extends React.Component {
  onSubmit = () => {
    this.props.deleteDivision({
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

export default graphql(deleteDivision, {
  name: "deleteDivision",
  options: {
    refetchQueries: ['divisions']
  }
})(DeleteDivision);