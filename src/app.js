import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import configureStore from './store/configureStore'
import * as expensesActions from './actions/expenses'
import * as filterActions from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()
store.dispatch(expensesActions.addExpense({description: 'desc', note: 'hello', amount: 123}))
store.dispatch(filterActions.sortByAmount())
store.dispatch(filterActions.setTextFilter('hello'))
store.dispatch(expensesActions.addExpense({ description: 'water bill', amount: 1000}))
store.dispatch(expensesActions.addExpense({ description: 'electr bill', amount: 500}))

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'))