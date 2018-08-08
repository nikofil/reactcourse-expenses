import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class AddExpensePage extends React.Component {
    submitHandle = (obj) => {
        this.props.addExpense(obj)
        this.props.history.push('/')
    }

    render() {
        return <ExpenseForm submit={this.submitHandle} />
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (obj) => dispatch(addExpense(obj))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage)