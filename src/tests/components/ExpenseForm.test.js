import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid submit', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper.state('error')).toBeNull()
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error')).toEqual(expect.any(String))
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = 'New description!'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper.state('description')).toEqual('')
    wrapper.find('input').at(0).simulate('change', { target: { value } })
    expect(wrapper.state('description')).toEqual(value)
    expect(wrapper).toMatchSnapshot()
})

test('should call onSubmit for valid form submission', () => {
    const submitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm submit={submitSpy} />)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    wrapper.find('input').at(0).simulate('change', { target: { value: 'desc' } })
    wrapper.find('input').at(1).simulate('change', { target: { value: '123' } })
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(submitSpy).toHaveBeenCalledTimes(1)
    expect(submitSpy).toHaveBeenLastCalledWith({ amount: 123, createdAt: 0, description: 'desc', note: '' })
    expect(wrapper).toMatchSnapshot()
})