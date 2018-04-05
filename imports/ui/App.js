import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './ResolutionForm';

const App = ({ data }) => {
    if(data.loading) {
        return 'Loading';
    } else {
        return (
        <div>
            <div>
                <h1>Hi, {data.name}!</h1>    
                <ResolutionForm refetch={data.refetch}/>
            </div>
            <ul>
                {data.resolutions.map(resolution => (
                    <li key={resolution._id}>
                        {resolution.name}
                    </li>
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

