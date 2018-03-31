import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'



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
    }).then((res) => {
      console.log(res);
      this.props.refetch();
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onSubmit}>x</button>
      </div>
    )
  }
};

export default graphql(deleteResolution, {
  name: "deleteResolution"
})(DeleteResolution);