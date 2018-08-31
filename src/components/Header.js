import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify app</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={ startLogout }>Log out</button>
    </header>
)

const mapDispatchToProps = {
    startLogout
}

export default connect(undefined, mapDispatchToProps)(Header)