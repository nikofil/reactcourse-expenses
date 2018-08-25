import * as expense from '../../actions/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = expense.removeExpense('0123')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '0123'
    })
})

test('should setup edit expense action object', () => {
    const action = expense.editExpense('0123', {note: 'New note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '0123',
        updates: {
            note: 'New note'
        }
    })
})

test('should setup add new expense action object', () => {
    const data = { description: 'Desc', note: 'Note', amount: 123, createdAt: 456 }
    const action = expense.addExpense(data)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data
        }
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'mouse',
        amount: 100,
        note: 'new mouse',
        createdAt: 1000
    }

    store.dispatch(expense.startAddExpense(expenseData)).then(() => {
        const action = store.getActions()[0]
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${action.expense.id}`).once('value')    
    }).then((snap) => {
        expect(snap.val()).toEqual(expenseData)
    }).then(done)
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    store.dispatch(expense.startAddExpense({})).then(() => {
        const action = store.getActions()[0]
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
        return database.ref(`expenses/${action.expense.id}`).once('value')    
    }).then((snap) => {
        expect(snap.val()).toEqual(expenseDefaults)
    }).then(done)
})