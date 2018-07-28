import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';


const logMidd = ({getState,dispatch}) => (next) => (action) => {
    console.log(`Action: ${action.type}`)
    console.log(getState())
    next(action)
}

const store = createStore(combineReducers({
    a: (state={lol:1}, action) => {
        let { lol, ...other } = state || {}
        switch(action.type) {
        case 'inc':
            return {lol:lol+1, ...other}
        case 'dec':
            return {lol:lol-1, ...other}
        default:
            return state
        }
    },
    b: (state={wut:'hello'}, action) => {
        let {wut} = state || {}
        switch(action.type) {
        case 'inc':
            return {wut: `${wut}o`}
        case 'dec':
            return {wut: wut.substring(0, wut.length-1)}
        default:
            return state
        }
    },
}), applyMiddleware(logMidd))

const inc = () => ({ type: 'inc'})
const dec = () => ({ type: 'dec'})

let El = connect(({a}, props)=>{
    return {...props, ...a}
})((state) => {
    return (<div><button onClick={() => {state.dispatch(inc())}}>Hello world {state.lol}</button></div>)
})

const jsx = (<Provider store={store}>
    <El hi="hey" />
    </Provider>)

ReactDOM.render(jsx, document.getElementById('app'))