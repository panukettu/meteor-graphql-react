import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import merge from "lodash/merge";

import ResolutionSchema from "../../api/resolutions/Resolution.graphql";
import ResolutionResolvers from "../../api/resolutions/resolvers";
import GoalSchema from "../../api/goals/Goals.graphql";
import GoalResolvers from "../../api/goals/resolvers";
import UserSchema from "../../api/users/User.graphql";
import UserResolvers from "../../api/users/resolvers";

<<<<<<< HEAD

const testSchema = `
type Query {
    name: String,
    age: Int,
    resolutions: [Resolution]
}
`;
=======
 
const typeDefs = [ResolutionSchema, UserSchema, GoalSchema];
>>>>>>> 4ba9ab1c6750aa69eea12ce99859031230d0e049

const resolvers = merge(ResolutionResolvers, UserResolvers, GoalResolvers);

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

createApolloServer({ schema });

// bugggg
