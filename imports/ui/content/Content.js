import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import AppBar from 'material-ui/AppBar';

import Resolutions from "../Resolutions";

const Content = ({resolutions, loading}) => (
	<div id="main-content" style={styles.mainContent}>
		<div id="main-content-header" style={styles.mainContentHeader}>
      top
		</div>
		<div id="main-content-page" style={styles.mainContentPage}>
    {loading ? (
      	<div>Loading</div>
    ) : (
      <Resolutions resolutions={resolutions} />
    )}
		</div>
	</div>
);

const query = gql`
  query resolutions {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(query, {
  props: ({ data }) => ({...data})
})(Content);

const styles = {
  mainContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  mainContentHeader: {
    flex: 0.1
  },
  mainContentPage: {
    flex: 0.9
  }
}
