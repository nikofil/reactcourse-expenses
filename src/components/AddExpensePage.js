import React from 'react'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class AddExpensePage extends React.Component {
    submitHandle = (obj) => {
        this.props.addExpense(obj)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm submit={this.submitHandle} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (obj) => dispatch(startAddExpense(obj))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage)