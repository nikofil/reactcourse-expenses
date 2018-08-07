const moment = require.requireActual('moment')

export default function(timestamp = 0) {
    return moment(timestamp)
}