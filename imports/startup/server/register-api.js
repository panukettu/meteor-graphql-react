import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionSchema from '../../api/resolutions/Resolutions.graphql';

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

const resolvers = {
    Query: {
        name() {
            return "Panu";
        },
        age() {
            return 27;
        },
        resolutions() {
            return [
                {
                    _id: "asfasfasfasf",
                    name: "Get stuff done!"
                },
                {
                    _id: "eeeeeeeeeeee",
                    name: "Read a book!"
                }
            ];
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });