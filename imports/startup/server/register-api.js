import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import merge from "lodash/merge";

import DivisionSchema from "../../api/divisions/Division.graphql";
import DivisionResolvers from "../../api/divisions/resolvers";
import SkillSchema from "../../api/skills/Skill.graphql";
import SkillResolvers from "../../api/skills/resolvers";
import UserSchema from "../../api/users/User.graphql";
import UserResolvers from "../../api/users/resolvers";

 
const typeDefs = [DivisionSchema, UserSchema, SkillSchema];

const resolvers = merge(DivisionResolvers, UserResolvers, SkillResolvers);

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

createApolloServer({ schema });

// buggggggg
