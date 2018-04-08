export const typeDefs = `
    type Player {
        id: ID!
        firstName: String
        lastName: String
        displayName: String
        team: String
        teamShort: String
        teamJersey: String
        teamPos: String
        injuryTag: String
        college: String
        height: String
        weight: String
        birthdate: String
        yearspro: String
        alias: String
    }

    type Query {
        players: [Player]
    }
`;