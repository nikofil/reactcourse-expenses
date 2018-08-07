import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss'

import configureStore from './store/configureStore'
import * as expensesActions from './actions/expenses'
import * as filterActions from './actions/filters'

const store = configureStore()
store.dispatch(expensesActions.addExpense({description: 'desc', note: 'hello', amount: 123}))
store.dispatch(expensesActions.addExpense({ description: 'water bill', amount: 1000}))
store.dispatch(expensesActions.addExpense({ description: 'electr bill', amount: 500, createdAt: 500}))
store.dispatch(filterActions.sortByAmount())

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'))