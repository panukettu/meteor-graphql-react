import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import merge from 'lodash/merge';

import ResolutionSchema from '../../api/resolutions/Resolution.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';


//

const TestSchema = `
type Query {
    name: String 
    age: Int
    resolutions: [Resolution]
    user: User
}
`;

const typeDefs = [
    TestSchema,
    ResolutionSchema,
    UserSchema
];

const testResolvers = {
    Query: {
        name() {
            return "Panu";
        },
        age() {
            return 27;
        }
    }
}

const resolvers = merge(testResolvers, ResolutionsResolvers, UserResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });