import React from 'react'
import { shallow } from 'enzyme'
import { DashboardPage } from '../../components/DashboardPage'

test('should render Dashboard with expenses', () => {
    const expenses = [{
        description: 'desc1', amount: 123, createdAt: 1000
    },{
        description: 'desc2', amount: 100, createdAt: 2000
    }]
    const wrapper = shallow(<DashboardPage expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})