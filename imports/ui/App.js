import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Theme from './theme/Theme';
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import Layout from './layout/Layout';

const userQuery = gql`
	query user {
		user {
			_id
			email
		}
	}
`;

const theme = getMuiTheme(Theme);

const App = () => (
	<MuiThemeProvider muiTheme={theme}>
		<Layout />
	</MuiThemeProvider>
);
export default graphql(userQuery, {
	props: ({ data }) => ({ ...data })
})(withApollo(App));
