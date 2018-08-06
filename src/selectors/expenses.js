import moment from 'moment'

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => expenses.filter(expense => (
    (typeof text == 'undefined' || (expense.description + expense.note).toLowerCase().includes(text)) &&
    (typeof startDate == 'undefined' || moment(expense.createdAt).isSameOrAfter(startDate, 'day')) &&
    (typeof endDate == 'undefined' || moment(expense.createdAt).isSameOrBefore(endDate, 'day'))
)).sort((a, b) => sortBy == 'amount' ? (b.amount - a.amount) : (b.createdAt - a.createdAt))

export default getVisibleExpenses