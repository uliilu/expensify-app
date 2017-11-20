import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Unconnected component
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>Keine Ausgaben vorhanden!</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))
            )
        }
    </div>
);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);
// export default ConnectedExpenseList;
// Kann kürzer erstellt werden.

// Üblicher ist es, es wie folgt zu machen:
// 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);
