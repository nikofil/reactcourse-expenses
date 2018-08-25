import * as expense from '../../actions/expenses'

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