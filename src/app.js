import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const DashboardPage = () => {
    return <div>Dashboard</div>
}

const AddExpensePage = () => {
    return <div>Add</div>
}

const EditExpensePage = () => {
    return <div>Edit</div>
}

const HelpPage = () => {
    return <div>Help</div>
}

const NotFoundPage = () => {
    return <div>404! <Link to="/">Go home</Link></div>
}

const Header = () => (
    <header>
        <h1>Header</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ DashboardPage } exact={true} />
                <Route path='/create' component={ AddExpensePage } />
                <Route path='/edit' component={ EditExpensePage } />
                <Route path='/help' component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))