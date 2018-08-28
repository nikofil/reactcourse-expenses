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
import { firebase } from './firebase/firebase'

const store = configureStore()
store.dispatch(filterActions.sortByAmount())
store.dispatch(expensesActions.startSetExpenses()).then(() => {
    ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'))
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in', user)
    } else {
        console.log('log out', user)
    }
})