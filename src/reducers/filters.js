import moment from 'moment'

const restoredFilters = JSON.parse(window.localStorage.filters || null) || {}

if (restoredFilters.startDate) {
    restoredFilters.startDate = moment(restoredFilters.startDate)
}

if (restoredFilters.endDate) {
    restoredFilters.endDate = moment(restoredFilters.endDate)
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    ...restoredFilters,
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text,
        }
    case 'SORT_BY':
        return {
            ...state,
            sortBy: action.by,
        }
    case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.date,
        }
    case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.date,
        }
    default:
        return state
    }
}