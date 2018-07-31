import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (state) => (
    <div>
        <input type="text" value={state.filters.text} onChange={(e) => state.dispatch(setTextFilter(e.target.value))} />
        <select value={state.filters.sortBy} onChange={(e) => state.dispatch(e.target.value == 'amount' ? sortByAmount() : sortByDate())}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

export default connect(({filters}) => ({filters}))(ExpenseListFilters)