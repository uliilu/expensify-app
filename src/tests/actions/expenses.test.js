import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup expense remove action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup expense edit action object', () => {
    const action = editExpense('123abc', { note: 'Ich bin neu hier' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Ich bin neu hier'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Me is expense',
        amount: 109500,
        createdAt: 1000,
        note: 'Me too'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});
test('should setup add expense action object with NO provided values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            note: '',
            amount: 0,
            description: '',
            createdAt: 0
        }
    });
});
