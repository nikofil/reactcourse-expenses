import uuid from 'uuid'
import { createStore, combineReducers } from 'redux'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    }
})

// REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id,
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
})

// SORT_BY
const sortByAmount = () => ({
    type: 'SORT_BY',
    by: 'amount',
})

const sortByDate = () => ({
    type: 'SORT_BY',
    by: 'date',
})

// SET_START_DATE
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date,
})

// SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date,
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_EXPENSE':
        return [...state, action.expense]
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id != action.id)
    case 'EDIT_EXPENSE':
        return state.map((expense) => (expense.id == action.id ? {
            ...expense,
            ...action.updates,
        } : expense))
    default:
        return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text,
        }
    case 'SORT_BY':
        return {
            ...state,
            sortBy: action.by,
        }
    case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.date,
        }
    case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.date,
        }
    default:
        return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => expenses.filter(expense => (
    (typeof text == 'undefined' || (expense.description + expense.note).toLowerCase().includes(text)) &&
    (typeof startDate == 'undefined' || expense.createdAt >= startDate) &&
    (typeof endDate == 'undefined' || expense.createdAt <= endDate)
)).sort((a, b) => sortBy == 'amount' ? (b.amount - a.amount) : (b.createdAt - a.createdAt))

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))