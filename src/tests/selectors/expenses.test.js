import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        direction: 'asc',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1], expenses[0]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        direction: 'asc',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[2] ]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        direction: 'asc',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[0] ]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        direction: 'asc',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        direction: 'desc',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[2], expenses[1] ]);
});
