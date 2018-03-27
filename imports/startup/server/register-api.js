import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import merge from 'lodash/merge';

import ResolutionSchema from '../../api/resolutions/Resolution.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
// hi

const testSchema = `
type Query {
    name: String,
    age: Int,
    resolutions: [Resolution]
}
`;

const typeDefs = [
    testSchema,
    ResolutionSchema
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

const resolvers = merge(testResolvers, ResolutionsResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });