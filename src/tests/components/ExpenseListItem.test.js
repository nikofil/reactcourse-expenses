import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'

test('should render expense item', () => {
    const wrapper = shallow(<ExpenseListItem id="123" amount={456} createdAt={0} note="Hello world">Desc</ExpenseListItem>)
    expect(wrapper).toMatchSnapshot()
})