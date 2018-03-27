import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
    name: String,
    age: Int
}
`;

const typeDefs = [
    testSchema,
    ResolutionsSchema
];

const resolvers = {
    Query: {
        name() {
            return "Panu";
        },
        age() {
            return 27;
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });