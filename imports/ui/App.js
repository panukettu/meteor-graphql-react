import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";

import AppBar from 'material-ui/AppBar';

const App = ({ loading, client, user }) => {
	if (loading) {
		return "Loading";
	} else {
		return (
			<MuiThemeProvider>
				{user._id ? (
            <div id='container' style={styles.container}>
              <AppBar title={user._id} showMenuIconButton={false}/>
              <div id='content' style={styles.content}>
                <Sidebar client={client} user={user}/>
                <Content/>
              </div>
            </div>
				) : (
					<div style={styles.loginContainer}>
						<LoginForm client={client} />
						<RegisterForm client={client} />
					</div>
				)}
			</MuiThemeProvider>
		);
	}
};

const query = gql`
	query user {
		user {
			_id
      email 
		}
	}
`;

export default graphql(query, {
	props: ({ data }) => ({ ...data })
})(withApollo(App));

const styles = {
	container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  loginContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  }
};
