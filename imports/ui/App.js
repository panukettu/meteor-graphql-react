import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({ data }) => <h1>Hello, {data.name}!</h1>;

const query = gql`
{
    name,
    age
}
`;

export default graphql(
    query
)(App);

