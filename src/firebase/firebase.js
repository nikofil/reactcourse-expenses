import * as firebase from 'firebase'
import config from './firebaseConfig'

firebase.initializeApp(config)

firebase.database().ref('list').on('value', (snap) => {
    console.log('updated:', snap.val())
})

firebase.database().ref().remove()
    .then(() => firebase.database().ref('list').push(23))
    .then(() => firebase.database().ref('list').push(33))
    .then(() => firebase.database().ref('list').push(43))
    .then(() => {
        firebase.database().ref('list').on('value', (snap) => {
            snap.forEach((v) => console.log(v.val()))
        })
    })
    .then(() => firebase.database().ref('list').push(53))
    .then(() => firebase.database().ref('list').push(63))
    .catch(() => console.log('Error'))
