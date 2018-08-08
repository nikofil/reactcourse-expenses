import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('should render the AddExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    const expense = { description: 'desc', amount: 123, createdAt: 0 }
    wrapper.find('ExpenseForm').prop('submit')(expense)
    expect(addExpense).toHaveBeenLastCalledWith(expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
})