// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
})

// SORT_BY
export const sortByAmount = () => ({
    type: 'SORT_BY',
    by: 'amount',
})

export const sortByDate = () => ({
    type: 'SORT_BY',
    by: 'date',
})

// SET_START_DATE
export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date,
})

// SET_END_DATE
export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date,
})