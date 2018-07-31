import React from 'react'
import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>Editing: { props.match.params.id }
        <ExpenseForm />
        </div>
    )
}

export default EditExpensePage