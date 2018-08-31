import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ isAuthenticated, startLogout }) => (
    <header>
        <h1>Expensify app</h1>
        { isAuthenticated ? (
            <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        ) : (
            <NavLink to="/" activeClassName="is-active">Login</NavLink>
        ) }
        { isAuthenticated ? <NavLink to="/create" activeClassName="is-active">Create</NavLink> : null }
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        { isAuthenticated ? <button onClick={ startLogout }>Log out</button> : null }
    </header>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = {
    startLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)