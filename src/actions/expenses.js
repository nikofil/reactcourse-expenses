import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0,
        } = expenseData
        const expense = { description, note, amount, createdAt }
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => (
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        ))
    }
}

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id,
})

export const startRemoveExpense = (id) => (
    (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => dispatch(removeExpense(id)))
    }
)

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
})

export const startEditExpense = (id, updates) => (
    (dispatch, getState) => {
        const { id: _id, ...updateProps } = updates
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updateProps).then(() => dispatch(editExpense(id, updateProps)))
    }
)

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value', (snap) => {
            const expenseList = []
            snap.forEach((child) => {
                const val = child.val()
                expenseList.push({
                    ...val,
                    id: child.key
                })
            })
            return dispatch(setExpenses(expenseList))
        })
    }
}