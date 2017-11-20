import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, direction, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
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
