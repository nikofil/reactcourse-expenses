import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

test('should render the Header', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})

test('should log out on button click', () => {
    const logoutSpy = jest.fn()
    const wrapper = shallow(<Header isAuthenticated={true} startLogout={ logoutSpy } />)
    wrapper.find('button').at(0).simulate('click')
    expect(logoutSpy).toHaveBeenCalled()
})