import React from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        const expense = {...props.expense} || {}
        if (expense.createdAt !== undefined) {
            expense.createdAt = moment(expense.createdAt)
        }

        this.state = {
            description: '',
            amount: 0,
            note: '',
            createdAt: moment(),
            error: null,
            ...expense,
        }
    }

    onDescChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onAmountChange = (e) => {
        const amount = parseInt(e.target.value)
        if (!isNaN(amount)) {
            this.setState(() => ({amount}))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { id, description, amount, note, createdAt } = this.state
        if (!description || !amount) {
            this.setState(() => ({error: 'Please set description and amount'}))
        } else {
            this.setState(() => ({error: null}))
            const obj = { id, description, amount, note, createdAt: createdAt.valueOf() }
            this.props.submit(obj)
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                { this.state.error && <p className="form__error">{this.state.error}</p> }
                <input className="text-input" type="text" placeholder="Description" value={this.state.description} onChange={this.onDescChange} autoFocus />
                <input className="text-input" type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                <textarea className="textarea" value={this.state.note} onChange={this.onNoteChange} placeholder="Note"></textarea>
                <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.focused} onFocusChange={ ({focused}) => this.setState({focused}) } />
                <div>
                    <input className="button" type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}