export const typeDefs = `
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