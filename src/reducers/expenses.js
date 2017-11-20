// spread operator Beispiel: "...state" unten
// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
