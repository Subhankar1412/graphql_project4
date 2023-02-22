import 'graphql-import-node';
import * as profileTypeDefs from './schemas/profile.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import { makeExecutableSchema } from "graphql-tools";
import resolvers from './resolversMap';
import { GraphQLSchema } from "graphql";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [emptyTypeDefs, profileTypeDefs],
    resolvers
});

export default schema;