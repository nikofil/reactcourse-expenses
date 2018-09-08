import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss'

import configureStore from './store/configureStore'
import * as expensesActions from './actions/expenses'
import * as filterActions from './actions/filters'
import { firebase } from './firebase/firebase'
import { login, logout } from './actions/auth'
import LoadingPage from './components/LoadingPage'

const store = configureStore()

let hasRendered = false
ReactDOM.render(<LoadingPage />, document.getElementById('app'))

const renderApp = () => {
    if (!hasRendered) {
        hasRendered = true
        ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'))
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(expensesActions.startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})