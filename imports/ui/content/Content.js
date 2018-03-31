import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import AppBar from 'material-ui/AppBar';

import Resolutions from "../Resolutions";

const Content = ({resolutions, loading}) => (
	<div style={styles.contentContainer}>
		<div id="top-container">
			<AppBar showMenuIconButton={false}/>
		</div>
		<div id="content" style={styles.content}>
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
  content: {
    display: "flex",
    flex: 1
  },
  contentContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
}
