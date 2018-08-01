import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';
import { removeExpense } from '../actions/expenses';

const DashboardPage = (state) => {
    const children = state.expenses.map((x, key) => {
        const rmFunc = () => state.dispatch(removeExpense(x.id))
        return <ExpenseListItem key={key} {...x} remove={rmFunc}>{x.description}</ExpenseListItem>
    })
    return (
        <div>
            <div>Dashboard</div>
            <div>{children}</div>
            <ExpenseListFilters />
        </div>
    )
}

const mapStateToProps = ({expenses, filters}) => ({
    expenses: getVisibleExpenses(expenses, filters)
})

export default connect(mapStateToProps)(DashboardPage)