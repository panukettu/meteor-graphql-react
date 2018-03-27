import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({ data }) => {
    if(data.loading) {
        return 'Loading';
    } else {
        return (
        <div>
            <div>
                <h1>Hi, {data.name}!</h1>    
            </div>
            <ul>
                {data.resolutions.map(r => (
                    <li>{r.name}</li>
                ))}
            </ul>
        </div>
        )
    }
};

const query = gql`
{
    name
    age
    resolutions {
        _id
        name
    }
}
`;

export default graphql(
    query
)(App);

