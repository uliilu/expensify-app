import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state of expensesReducer', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 4
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 199,
        description: 'Virtuelles',
        note: '',
        amount: 3900,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
    const note = 'Sehr schwarz';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].note).toBe(note);
});

test('should not edit expense if not found', () => {
    const action = {
        type: 'EDIT_EXPANSE',
        id: 4,
        updates: {
            note: 'Nicht vorhanden'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
