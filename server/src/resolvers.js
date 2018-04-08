import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

const players = [
    {
        id: 1,
        team: 'Washington Mystics',
        firstName: 'Elena',
        lastName: 'Delle Donne',
        displayName: 'Elena Delle Donne',
        teamJersey: '11',
        teamPos: 'SF',
        injuryTag: 'GTD'
    },
    {
        id: 2,
        team: 'Minnesota Lynx',
        firstName: 'Maya',
        lastName: 'Moore',
        displayName: 'Maya Moore',
        teamJersey: '23',
        teamPos: 'SF',
        injuryTag: 'Healthy'
    },
    {
        id: 3,
        team: 'Los Angeles Sparks',
        firstName: 'Candace',
        lastName: 'Parker',
        displayName: 'Candace Parker',
        teamJersey: '00',
        teamPos: 'PF/C',
        injuryTag: 'OUT'
    }
]

export const resolvers = {
    Query: {
        players: () => {
            return players;
        },
        /*
        player: (root, { id }) => {
            return players.find(player => player.id === id);
        }
        */
    },
};