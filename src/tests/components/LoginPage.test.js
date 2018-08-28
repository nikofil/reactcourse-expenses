import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should render the login page', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should log in on button click', () => {
    const loginSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={ loginSpy } />)
    wrapper.find('button').at(0).simulate('click')
    expect(loginSpy).toHaveBeenCalled()
})