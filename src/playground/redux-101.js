import { createStore } from 'redux';

// ###################################################################################################
// Anfang object destructuring bei Übergabe eines objects
// const add = ({ a,b },c) => {
//     return (a + b) * c;
// };
// console.log(add({ a: 2, b: 13}, 100));
// Ende object destructuring bei Übergabe eines objects
// ###################################################################################################

// Action generators => functions that return action objects

// Dem Wert payload ein default object "{}"" zu geben ist wichtig, denn sollte
// nichts an die const "incrementCount" übergeben werden, würde versucht werden aus
// payload, (dann = undefined) ein Wert zu holen einen fehler werfen.
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
// IST DAS GLEICHE wie folgt:
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: incrementBy
// });
// IST DAS GLEICHE wie folgt, weil, wenn ein object Element genauso heißt, wie die einzusetzende Variable,
// kann direkt der Variablenname verwendet werden.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// ## 1. Reducers are pure functions (output is only determined by the input) Beispiel:
// let a = 10;
// // Keine pure function, weil a von außerhalb kommt.
// const add = (a, b) => {
//     return a + b;
// };
// // pure function, weil a und b aus dem Funktionsaufruf drunter kommen.
// const add = (a, b) => {
//     return a + b;
// };
// let ergebnis = add(5,55);
//
// ## 2. Never change state or action directly

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
    case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
    case 'SET':
        return {
            count: action.count
        };
    case 'RESET':
        return {
            count: 0
        };
    default:
        return state;
    }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// count inkrementieren
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
// wird die Konstante unsubscribe aufgerufen, passiert genau das!
// unsubscribe();

// count inkrementieren
store.dispatch(incrementCount());
// count inkrementieren - mit der neuen const "incrementCount", eine Funktion, geht's besser
// weniger Möglichkeit sich zu vertippen und Autovervollständigung!
store.dispatch(incrementCount());

// count zurücksetzen
store.dispatch(resetCount());

// count direkt setzen
store.dispatch(setCount({ count: 122 }));

// count dekrementieren
store.dispatch(decrementCount());

// count dekrementieren
store.dispatch(decrementCount({ decrementBy: 20 }));

/*
Actions - ist ein Objekt, dass an den store geschickt wird.




*/