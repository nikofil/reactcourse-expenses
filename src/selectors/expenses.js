// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => expenses.filter(expense => (
    (typeof text == 'undefined' || (expense.description + expense.note).toLowerCase().includes(text)) &&
    (typeof startDate == 'undefined' || expense.createdAt >= startDate) &&
    (typeof endDate == 'undefined' || expense.createdAt <= endDate)
)).sort((a, b) => sortBy == 'amount' ? (b.amount - a.amount) : (b.createdAt - a.createdAt))

export default getVisibleExpenses