import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup initial state', () => {
    const state = filtersReducer(undefined, {})
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY', by: 'amount'})
    expect(state.sortBy).toBe('amount')
})