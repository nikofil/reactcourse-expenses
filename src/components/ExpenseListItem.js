import React from 'react'

export default function({children, amount, createdAt, note, remove}) {
    return (<div>
    <h3>{children}</h3>
    <p><small>{note}</small></p>
    <p>{amount} - {createdAt}<small><button onClick={remove}>Remove</button></small></p>
    </div>)
}