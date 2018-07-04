import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const Index = () => {
    return <div>ind</div>
}

const Hello = () => {
    return <div>hi</div>
}

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={ Index } exact={true} />
            <Route path='/hello' component={ Hello } />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))