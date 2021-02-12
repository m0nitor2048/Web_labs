import firebase from "firebase";
import "firebase/database";
import "firebase/auth"


const config = {
    apiKey: "AIzaSyCQBZhjEo8ASmdm_Yd8A6RGJ8_SsMxvjPc",
    authDomain: "web-labs-e7122.firebaseapp.com",
    databaseURL: "https://web-labs-e7122-default-rtdb.firebaseio.com",
    projectId: "web-labs-e7122",
    storageBucket: "web-labs-e7122.appspot.com",
    messagingSenderId: "268418156618",
    appId: "1:268418156618:web:0f184b3d76cee4664c7eb3"
}


firebase.initializeApp(config);
console.log("FB: OK")

export const auth = firebase.auth()
// export const db = firebase.database();
// export const firebase = firebase
export default firebase
