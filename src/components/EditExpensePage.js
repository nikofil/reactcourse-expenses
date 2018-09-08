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
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Editing expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm expense={props.expense} submit={submit} />
                <button className="button button--secondary" onClick={remove}>Remove</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id == props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)