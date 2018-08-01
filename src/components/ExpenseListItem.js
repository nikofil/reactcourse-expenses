import React from 'react'
import { Link } from 'react-router-dom'

export default function({id, children, amount, createdAt, note, remove}) {
    return (<div>
    <Link to={`/edit/${id}`}><h3>{children}</h3></Link>
    <p><small>{note}</small></p>
    <p>{amount} - {createdAt}<small><button onClick={remove}>Remove</button></small></p>
    </div>)
}