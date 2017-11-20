import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    }
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
// Hier auch das sofortige "destructure" des übergebenen Objekts. Ist "id" enthalten wird es direkt als "id" destructured
// ist es nicht enthalten, wird ein leeres object destructured
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});
// SORT_BY_AMOUNT
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});
// SORT_BY_AMOUNT
const sortBy = (sortBy = 'date', direction = 'asc') => ({
    type: 'SORT_BY',
    sortBy,
    direction
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// spread operator Beispiel: "...state" unten
// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
    case 'REMOVE_EXPENSE':
    // Hier kommt ein object mit "type" und "id" an.
    // Eigentlich könnte es so "state.filter((expense) => expense.id !== action.id);" stehen, wird jedoch wird
    // expense sofort zur Variablen "id"
    // durch { id } destructured, Deswegen so: filter(({ id }) =>
    // filter() ändert den state nicht, sondern erzeugt ein neues Array.
        return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
        // "map" holt alle expenses in "state". Ist eine "expense.id" die der "action.id" gleicht
        // wird der eine "expense" geändert komplett zurückgegeben.
        // zunächst wird das object expense "spreaded", um mit "...action.updates", auch ein object,
        // die gewünschten Änderungen alle auf einmal vorzunehmen
        return state.map((expense) => {
            if(expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                };
            } else {
                return expense;
            }
        });
    default:
        return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    direction: 'asc',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
    case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: action.sortBy
        };
    case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: action.sortBy
        };
    case 'SORT_BY':
        return {
            ...state,
            sortBy: action.sortBy,
            direction: action.direction
        };
    case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
    case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
    default:
        return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, direction, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date' && direction === 'desc') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'date' && direction === 'asc') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount' && direction === 'desc') {
            return a.amount < b.amount ? 1 : -1;
        } else if (sortBy === 'amount' && direction === 'asc') {
            return a.amount > b.amount ? 1 : -1;
        }
    });
};
// Store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseEins = store.dispatch(addExpense({
    description: 'Die Miete ist zu hoch',
    amount: 100,
    createdAt: -21000
}));
const expenseZwei = store.dispatch(addExpense({
    description: 'Kaffee gibt es drei mal am Tag',
    amount: 300,
    createdAt: -1000
}));
const expenseDrei = store.dispatch(addExpense({
    description: 'Milch ist gut für die Knochen',
    amount: 800,
    createdAt: -10000
}));
const expenseVier = store.dispatch(addExpense({
    description: 'Ein Schnitzel am Tag',
    amount: 500,
    createdAt: -31000
}));

// store.dispatch(removeExpense({ id: expenseEins.expense.id }));
// store.dispatch(editExpense(expenseZwei.expense.id,{ amount: 500 }));

// store.dispatch(setTextFilter('drei'));
// store.dispatch(setTextFilter());

// // store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

store.dispatch(sortBy('amount','asc'));
store.dispatch(sortBy('date','asc'));

// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));

// const demoState = {
//     expenses: [{
//         id: 'pling',
//         description: 'Januar Miete',
//         note: 'Dies war die finale Zahlung für die Adresse',
//         amount: 45000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'Miete',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };


// const user = {
//     name: 'Uli',
//     alter: 52
// };
// Durch das Hinzufügen des babel-Plugins "transform-object-rest-spread"
// in ".babelrc" unter
// "plugins": [
//     "transform-class-properties",
//     "transform-object-rest-spread"
// ]
// können auch Objekte (objects) 'ge'spreaded werden
// Installation: [~] yarn add babel-plugin-transform-object-rest-spread
// Beispiel:
// console.log({
//     ...user,
//     ort: 'Bonn',
//     alter: 31
// });
