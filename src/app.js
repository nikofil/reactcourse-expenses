import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

console.log(<p>Hello world</p>)
console.log(document.getElementById('app'))
ReactDOM.render(<p>Hello world</p>, document.getElementById('app'))