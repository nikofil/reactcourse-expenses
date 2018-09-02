import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
import ExpenseSummary from './ExpenseSummary';
import ExpenseListFilters from './ExpenseListFilters';
import { removeExpense } from '../actions/expenses';

export const DashboardPage = (state) => {
    const children = state.expenses.map((x, key) => {
        return <ExpenseListItem key={key} {...x}>{x.description}</ExpenseListItem>
    })
    return (
        <div>
            <ExpenseSummary expenses={ state.expenses } />
            <ExpenseListFilters />
            <div>{children}</div>
        </div>
    )
}

const mapStateToProps = ({expenses, filters}) => ({
    expenses: getVisibleExpenses(expenses, filters)
})

export default connect(mapStateToProps)(DashboardPage)