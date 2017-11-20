import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortBy, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// Um CSS-Styles zu laden genügt import und der Dateiname inkl. Pfad
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

console.log(store.getState());

store.dispatch(addExpense({
    description: 'Wasser und Meer',
    amount: 50000,
    createdAt: -56000
}));
store.dispatch(addExpense({
    description: 'Haushaltsanschaffungen auf periodoscher Ebene',
    amount: 43300,
    createdAt: 56777
}));
store.dispatch(addExpense({
    description: 'Eine Packung Ninjago Karten',
    amount: 5000,
    createdAt: -569777
}));
store.dispatch(addExpense({
    description: 'Handy Hülle',
    amount: 9900,
    createdAt: 9956777
}));

// store.dispatch(setTextFilter('meer'));
// // store.dispatch(setTextFilter('water'));
//store.dispatch(sortBy('amount','desc'));
store.dispatch(sortBy('date'));

// setTimeout(() => {
//     store.dispatch(setTextFilter(''));
// //    store.dispatch(sortBy('date','asc'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
