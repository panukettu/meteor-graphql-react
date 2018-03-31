import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable } from 'material-ui/List';

import ResolutionForm from "./ResolutionForm";
import DeleteResolution from "./DeleteResolution";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    topContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resolutionsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
}

const App = ({ loading, resolutions, client }) => {
  if (loading) {
    return "Loading";
  } else {
    return (
    <MuiThemeProvider>
        <div style={styles.container}>
            <div id='top-container' style={styles.topContainer}>
                <LoginForm client={client} />
                <RegisterForm client={client} />
                <button
                        type="submit"
                        onClick={() => {
                        Meteor.logout();
                        client.resetStore();
                        }}
                >
                    Logout
                </button>
            </div>
            <div id='container' style={styles.contentContainer}>
                <div id='resolutionsContainer' style={styles.resolutionsContainer}>
                    <ResolutionForm client={client} />
                    <List>
                    {resolutions.map(resolution => (
                        <ListItem key={resolution._id}>
                        {resolution.name}
                        <DeleteResolution _id={resolution._id} />
                        </ListItem>
                    ))}
                    </List>
                </div>
            </div>
        </div>
    </MuiThemeProvider>
    );
  }
};

const query = gql`
  query resolutions {
    name
    age
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(query, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
