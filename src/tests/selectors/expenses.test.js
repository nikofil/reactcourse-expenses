import getVisibleExpenses from "../../selectors/expenses"
import moment from "moment"

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 500,
    createdAt: moment(0).valueOf()
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 800,
    createdAt: moment(0).add(4, 'days').valueOf()
},{
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 400,
    createdAt: moment(0).add(8, 'days').valueOf()
}]

test('should filter by text value', () => {
    const filtered = getVisibleExpenses(expenses, { text: 'e' })
    expect(filtered.length).toBe(2)
})

test('should filter by start date', () => {
    const startDate = moment(0).add(4, 'days')
    let filtered = getVisibleExpenses(expenses, { startDate: moment(startDate).add(1, 'day') })
    expect(filtered).toEqual([expenses[2]])
    filtered = getVisibleExpenses(expenses, { startDate })
    expect(filtered).toEqual([expenses[2], expenses[1]])
})

test('should filter by end date', () => {
    const endDate = moment(0).add(4, 'days')
    let filtered = getVisibleExpenses(expenses, { endDate: moment(endDate).subtract(1, 'day') })
    expect(filtered).toEqual([expenses[0]])
    filtered = getVisibleExpenses(expenses, { endDate })
    expect(filtered).toEqual([expenses[1], expenses[0]])
})

test('should sort by date', () => {
    const filtered = getVisibleExpenses(expenses, { sortBy: 'date' })
    expect(filtered).toEqual([expenses[2], expenses[1], expenses[0]])
})

test('should sort by amount', () => {
    const filtered = getVisibleExpenses(expenses, { sortBy: 'amount' })
    expect(filtered).toEqual([expenses[1], expenses[0], expenses[2]])
})