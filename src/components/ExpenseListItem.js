import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

export default function({id, children, amount, createdAt, note}) {
    return (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{children}</h3>
                <span className="list-item__subtitle">{ moment(createdAt).format('MMMM Do YY') }</span>
            </div>
            <h3 className="list-item__data">{ numeral(amount).format('$0,0') }</h3>
        </Link>
    )
}