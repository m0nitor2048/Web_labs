// const firestoreService = require('firestore-export-import');
// const serviceAccount = require('./serviceAccountKey.json');
//
// const databaseURL = "https://web-labs-e7122-default-rtdb.firebaseio.com"
//
// firestoreService.initializeApp(serviceAccount, databaseURL);
//
// firestoreService.restore("data.json");

// Imports
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccountKey.json');
// JSON To Firestore


const admin = require('firebase-admin');
const functions = require('firebase-functions');






const jsonToFirestore = async () => {

    try {
        // await admin.initializeApp()
        console.log('Initialzing Firebase');
        await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
        // await firestoreService.initializeApp(firebaseConfig);

        console.log('Firebase Initialized');

        await firestoreService.restore('./data.json');
        console.log('Upload Success');
    }
    catch (error) {
        console.log(error);
    }
};

        test()
jsonToFirestore();