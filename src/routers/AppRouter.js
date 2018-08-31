import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import DashboardPage from '../components/DashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

export const history = createHistory()

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Header />
            <Switch>
                <PublicRoute path='/' component={ LoginPage } exact={true} />
                <PrivateRoute path='/dashboard' component={ DashboardPage } />
                <PrivateRoute path='/create' component={ AddExpensePage } />
                <PrivateRoute path='/edit/:id' component={ EditExpensePage } />
                <Route path='/help' component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </Router>
)

export default AppRouter