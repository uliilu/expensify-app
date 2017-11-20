import moment from 'moment';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';

test('should generate set startdate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});
test('should generate set enddate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
test('should setup sort by date action object', () => {
    // const action = sortByDate();
    // expect(action).toEqual({
    //     type: 'SORT_BY_DATE',
    //     sortBy: 'date'
    // });
    // Das Gleiche nur kürzer:
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE', sortBy: 'date' });
});
test('should setup sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
    // Das Gleiche nur kürzer:
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT', sortBy: 'amount' });
});
test('should setup set text filter action object with text value', () => {
    const text = 'Etwas darin';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});
test('should setup set text filter action object without text value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
                        