import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (state) => (
    <div>
        <input type="text" value={state.filters.text} onChange={(e) => state.dispatch(setTextFilter(e.target.value))} />
    </div>
)

export default connect(({filters}) => ({filters}))(ExpenseListFilters)