import moment from 'moment';

export default [
    {
        id: 1,
        description: 'Miete',
        note: 'Notiz',
        amount: 45000,
        createdAt: 0
    },{
        id: 2,
        description: 'Kaffee',
        note: 'Note',
        amount: 250,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id: 3,
        description: 'Stativ',
        note: 'Höher',
        amount: 3500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];
