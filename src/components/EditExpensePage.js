import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    const submit = (obj) => {
        props.dispatch(editExpense(obj.id, obj))
        props.history.push('/')
    }

    return (
        <div>Editing: { props.match.params.id }
            <ExpenseForm expense={props.expense} submit={submit} />
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id == props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)