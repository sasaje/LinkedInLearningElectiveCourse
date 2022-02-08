const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley', 'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 
    'Rick', 'Michael', 'Rick', 'Albert', 'Karen', 'Harry', 'Karen', 'Donna', 'Ashley', 'Albert', 'Harry', 
    'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes = votes => {
    return votes.reduce((acc, name) => ({
        ...acc, //names and votes
        [name]: acc[name] ? acc[name] + 1 : 1,
    }), {});
};

console.log(tallyVotes(electionVotes));