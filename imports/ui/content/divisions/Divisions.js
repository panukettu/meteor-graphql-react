import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import Alarm from "material-ui/svg-icons/action/alarm";

import Division from './Division';

export default class Divisions extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        {this.props.divisions.map(div => <Division key={div._id} division={div}/>)}
      </div>
    )
  }
}

const styles = {
  container: {
		margin: 20,
    padding: 20,
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
  },
}