import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {
    state = { rangeFocus: undefined }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    render() {
        const props = this.props
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" placeholder="Search expenses" type="text" value={props.filters.text} onChange={(e) => props.dispatch(setTextFilter(e.target.value))} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={props.filters.sortBy} onChange={(e) => props.dispatch(e.target.value == 'amount' ? sortByAmount() : sortByDate())}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker displayFormat="YYYY/MM/DD" startDate={props.filters.startDate} endDate={props.filters.endDate} onDatesChange={this.onDatesChange} focusedInput={this.state.rangeFocus} onFocusChange={(rangeFocus) => this.setState({rangeFocus})} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(({filters}) => ({filters}))(ExpenseListFilters)