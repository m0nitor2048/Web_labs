const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccountKey.json');

const databaseURL = "https://web-labs-e7122-default-rtdb.firebaseio.com"


console.log('Initialzing Firebase');
firestoreService.initializeApp(serviceAccount, databaseURL);

console.log('Firebase Initialized');

firestoreService.restore('data.json');
console.log('Upload Success');

