import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    const submit = (obj) => {
        props.dispatch(startEditExpense(obj.id, obj)).then(() => (
            props.history.push('/')
        ))
    }

    const remove = () => {
        props.dispatch(startRemoveExpense(props.match.params.id)).then(() => (
            props.history.push('/')
        ))
    }

    return (
        <div>Editing: { props.match.params.id }
            <ExpenseForm expense={props.expense} submit={submit} />
            <button onClick={remove}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id == props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)