// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});
// SORT_BY_AMOUNT
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});
// SORT_BY
export const sortBy = (sortBy = 'date', direction = 'asc') => ({
    type: 'SORT_BY',
    sortBy,
    direction
});
// // SORT_BY
// export const sortBy = (sortBy = 'date') => ({
//     type: 'SORT_BY',
//     sortBy
// });
// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
