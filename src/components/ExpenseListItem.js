import React from 'react'

export default function({children, amount, createdAt, remove}) {
    return (<div>
    <h3>{children}</h3>
    <p>{amount} - {createdAt}<small><button onClick={remove}>Remove</button></small></p>
    </div>)
}