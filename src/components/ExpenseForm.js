import React from 'react'

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: 0,
        note: '',
    }

    onDescChange = (e) => {
        const description = e.target.value
        this.setState((s) => ({...s, description}))
    }

    onAmountChange = (e) => {
        const amount = parseInt(e.target.value)
        if (!isNaN(amount)) {
            this.setState((s) => ({...s, amount}))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState((s) => ({...s, note}))
    }

    render() {
        return (
            <div>
            <form>
            <div>
            <input type="text" placeholder="Description" value={this.state.description} onChange={this.onDescChange} autoFocus />
            </div><div>
            <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
            </div><div>
            <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Note"></textarea>
            </div>
            </form>
            </div>
        )
    }
}