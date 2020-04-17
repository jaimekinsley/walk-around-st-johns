const dubs = {
    id: 'dubs',
    title: 'Fried Chicken at Dubs',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/dubs.jpg',
    description: `
        The smell of fried chicken pulls you into Marie’s. What do you do?
    `,
    choices: [{
        id: 'patio',
        description: 'Head to the patio',
        result: `
            It’s a nice day outside, so you want to get a spot to sit on the patio. You order a beer and sip it in the sunshine.
        `,
        energy: -10,
        money: -5
    }, {
        id: 'food',
        description: 'I came for the fried food',
        result: `
            Go straight to the counter and order the chicken and waffles.
        `,
        energy: 10,
        money: -15
    }, {
        id: 'hi',
        description: 'Just say hi to Dubs',
        result: `
            You’re not that hungry, so you just stop in and say hi to Dubs. He tells you about the latest neighborhood fundraiser, so you give a donation.
        `,
        energy: -10,
        money: -10
    }]
};

const coffee = {
    id: 'coffee',
    title: 'Cathedral Coffee',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'NEED SOMETHING.jpg',
    description: `
        You walk past Cathedral Coffee and decide to stop in. What do you do?
    `,
    choices: [{
        id: 'to-go',
        description: 'Place a To-Go Order',
        result: `
            Grab a coffee to go and resume your walk.
        `,
        energy: 10,
        money: -5
    }, {
        id: 'stay',
        description: 'Take a spot at the long table',
        result: `
            Grab a chair and sit down next to some neighbors. Get engrossed in a conversation about local politics. Grab a refill stay awhile.
        `,
        hp: 5,
        gold: -10
    }, {
        id: 'muffin',
        description: 'Coffee and muffin',
        result: `
            Order a coffee and fresh baked muffin and take it outside to enjoy on the bench alone and resume your walk.
        `,
        energy: 10,
        money: -10
    }]
};
 
const activities = [
    dubs,
    coffee
];

export default activities;