// const { initializeApp, restore } = require('firestore-export-import')
// const serviceAccount = require('./serviceAccountKey.json')
// // import firebase from "firebase/app"
//
// const databaseURL = "https://testfb-a7ea9-default-rtdb.firebaseio.com"
//
// initializeApp(serviceAccount, databaseURL)
//
//
// restore("./data.json", {
//     dates: ['date1', 'date1.date2', 'date1.date2.date3'],
//     geos: ['location', 'locations'],
//     refs: ['refKey', 'arrayRef'],
// })

const firestoreService = require('firestore-export-import')
const serviceAccount = require('./serviceAccountKey.json')

const databaseURL = "https://testfb-a7ea9-default-rtdb.firebaseio.com"

firestoreService.initializeApp(serviceAccount, databaseURL);
firestoreService.restore(data.json);