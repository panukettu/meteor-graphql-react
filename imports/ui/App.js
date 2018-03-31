import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";

import ResolutionForm from "./ResolutionForm";
import DeleteResolution from "./DeleteResolution";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const App = ({ loading, resolutions, client }) => {
  if (loading) {
    return "Loading";
  } else {
    return (
      <div>
        <div>
          <LoginForm client={client} />
          <RegisterForm client={client} />
          <ResolutionForm client={client} />
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
        <ul>
          {resolutions.map(resolution => (
            <li key={resolution._id}>
              {resolution.name}
              <DeleteResolution _id={resolution._id} />
            </li>
          ))}
        </ul>
      </div>
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
