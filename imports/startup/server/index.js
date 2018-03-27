import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Query {
    name: String,
    age: Int
}
`;

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