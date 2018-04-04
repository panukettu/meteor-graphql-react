import React from 'react';

import gql from 'graphql-tag';
import { graphql } from "react-apollo";

import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import { TextField, FloatingActionButton } from 'material-ui';

import SkillForm from '../../forms/SkillForm';

const deleteDivision = gql`
  mutation deleteDivision($_id: String) {
    deleteDivision(_id: $_id) {
      _id
    }
  }
`;

const Division = ({ division, deleteDivision }) => {

  handleDelete = () => {
    deleteDivision({
      variables: {
        _id: division._id,
      }
    })
  }

  return (
    <List>
      <ListItem leftAvatar={<Avatar src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'/>} >
        <span style={styles.divisionTitle}>{division.name}</span>
      </ListItem>
      <ListItem style={styles.skillItem} leftAvatar={<Avatar src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' size={25}/>}>Skill 1</ListItem>
      <ListItem style={styles.skillItem} leftAvatar={<Avatar src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' size={25}/>}>Skill 2</ListItem>
      <ListItem><SkillForm divisionId={division._id}/></ListItem>
      <ListItem style={styles.removeItem} onClick={this.handleDelete}>Poista</ListItem>
    </List>
  )
}

export default graphql(deleteDivision, {
  name: 'deleteDivision',
  options: {
    refetchQueries: ['divisions']
  }
})(Division);

const styles = {
  divisionTitle: {
    borderBottom: '1px solid white',
  },
  skillItem: {
    fontSize: 12,
  },
  removeItem: {
    color: 'red',
  }
}