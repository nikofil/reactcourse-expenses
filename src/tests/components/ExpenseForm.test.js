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