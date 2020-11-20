import firebase from 'firebase'
require('firebase/auth')

const app=firebase.initializeApp({
    apiKey: "AIzaSyDzGg0dHzSOCFzoB-DPJ-n_aXePU05jkPg",
    authDomain: "twiter-clone-e035a.firebaseapp.com",
    databaseURL: "https://twiter-clone-e035a.firebaseio.com",
    projectId: "twiter-clone-e035a",
    storageBucket: "twiter-clone-e035a.appspot.com",
    messagingSenderId: "457741735843",
    appId: "1:457741735843:web:a867adc29efb5ded0aac16",
    measurementId: "G-2WTPSJGRFR"

});
console.log(app.auth)

export const auth=app.auth()
export default app