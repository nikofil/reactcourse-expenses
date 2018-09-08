import React from 'react'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

export default function({ expenses }) {
    const expenseWord = expenses.length == 1 ? 'expense' : 'expenses'
    const totalAmount = expenses.map((x) => x.amount).reduce((acc, val) => acc + val, 0)
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{ expenses.length }</span> { expenseWord } totalling <span>{ numeral(totalAmount).format('$0,0') }</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}