import React from 'react'

export default function({ expenses }) {
    return (
        <div>
            Viewing { expenses.length } expenses totalling { expenses.map((x) => x.amount).reduce((acc, val) => acc + val) }
        </div>
    )
}