import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

const AddExpensePage = (props) => {
    const submitHandle = (obj) => {
        props.dispatch(addExpense(obj))
        props.history.push('/')
    }
    return <ExpenseForm submit={submitHandle} />
}

export default connect()(AddExpensePage)