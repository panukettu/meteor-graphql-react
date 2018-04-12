import React from "react";
import Division from './Division';

import DivisionForm from '../../forms/division/DivisionForm';

import UserContext from '../../user-context';

export default class Divisions extends React.Component {

  render() {
    const { divisions } = this.props;
    return (
      <div style={styles.container}> 
        {divisions.map(div => <Division key={div._id} division={div}/>)}
        <UserContext.Consumer>
          {({user}) => user && user._id ? <DivisionForm divisions={divisions}/> : ''}
        </UserContext.Consumer>
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