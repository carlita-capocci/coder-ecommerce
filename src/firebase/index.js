import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCdfHZ-tePyr9F6FMr9W9tC0Uh2u2nvv5I",
    authDomain: "coder-ecommerce-b877f.firebaseapp.com",
    databaseURL: "https://coder-ecommerce-b877f.firebaseio.com",
    projectId: "coder-ecommerce-b877f",
    storageBucket: "coder-ecommerce-b877f.appspot.com",
    messagingSenderId: "926473467114",
    appId: "1:926473467114:web:eec51cc2e90c6c198a9393"

});


export function getFirebase(){
    return app;

}

export function getFirestore(){
    return firebase.firestore(app);

}
