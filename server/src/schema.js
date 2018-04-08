import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Player {
        id: ID!
        firstName: String
        lastName: String
        displayName: String
        team: String
        teamJersey: String
        teamPos: String
        injuryTag: String
        college: String
    }

    type Query {
        players: [Player]
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };