import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

const players = [
    {
        id: 1,
        firstName: 'Elena',
        lastName: 'Delle Donne',
        displayName: 'Elena Delle Donne',
        team: 'Washington Mystics',
        teamShort: 'WAS',
        teamJersey: '11',
        teamPos: 'SF',
        injuryTag: 'GTD',
        college: 'Delaware',
        height: '6-5',
        weight: '188 lbs',
        birthdate: 'Sept 5, 1989',
        yearspro: 4,
        alias: 'elena-delle-donne',
    },
    {
        id: 2,
        firstName: 'Maya',
        lastName: 'Moore',
        displayName: 'Maya Moore',
        team: 'Minnesota Lynx',
        teamShort: 'MIN',
        teamJersey: '23',
        teamPos: 'SF',
        injuryTag: 'OK',
        college: 'Connecticut',
        height: '6-0',
        weight: '177 lbs',
        birthdate: 'Jun 11, 1989',
        yearspro: 6,
        alias: 'maya-moore'
        
    },
    {
        id: 3,
        firstName: 'Candace',
        lastName: 'Parker',
        displayName: 'Candace Parker',
        team: 'Los Angeles Sparks',
        teamShort: 'LA',
        teamJersey: '3',
        teamPos: 'PF/C',
        college: 'Tennessee',
        injuryTag: 'OUT',
        height: '6-4',
        weight: '175 lbs',
        birthdate: 'Apr 19, 1986',
        yearspro: 9,
        alias: 'candace-parker'
    },
    {
        id: 4,
        firstName: 'Sue',
        lastName: 'Bird',
        displayName: 'Sue Bird',
        team: 'Seattle Storm',
        teamShort: 'SEA',
        teamJersey: '10',
        teamPos: 'G',
        college: 'Connecticut',
        height: '5-9',
        weight: '150 lbs',
        birthdate: 'Oct 16, 1980',
        yearspro: 14,
        alias: 'sue-bird'
    }
]

export const resolvers = {
    Query: {
        players: () => {
            return players;
        },
        player: (root, { id }) => {
            return players.find(player => player.id == id);
        }
    },
};