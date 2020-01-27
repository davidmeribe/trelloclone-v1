import firebase from "firebase";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// class Database{
//     constructor (){
//         // Initialize Firebase
//         firebase.initializeApp(firebaseConfig);
//         firebase.analytics();
//     }
// }

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export {db};

// apiKey: "AIzaSyAbgfg71sOfcfdNRjFbJ7NvIZNV-F9FYas",
//     authDomain: "trelloclone-v1.firebaseapp.com",
//     databaseURL: "https://trelloclone-v1.firebaseio.com",
//     projectId: "trelloclone-v1",
//     storageBucket: "trelloclone-v1.appspot.com",
//     messagingSenderId: "560243163908",
//     appId: "1:560243163908:web:d599645ab6317a575a0651",
//     measurementId: "G-N22DXVJ2EJ"
