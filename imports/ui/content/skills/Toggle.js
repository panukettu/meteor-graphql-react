import React from 'react';

import gql from 'graphql-tag';
import { graphql } from "react-apollo";

const query = gql`
  mutation toggleSkill($_id: String) {
    toggleSkill(_id: $_id) {
      _id
    }
  }
`;

const Toggle = ({_id, completed, toggleSkill }) => {

  handleChange = () => {
    toggleSkill({
      variables: {
        _id: _id
      }
    })
  }

  return (
  <div>
    <input type="checkbox" onChange={this.handleChange} defaultChecked={completed} />
  </div>
  );
}

export default graphql(query, {
  name: 'toggleSkill',
  options: {
    refetchQueries: ["divisions"]
  }
})(Toggle);