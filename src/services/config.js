
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//Vamos a importat dos funciones de la lib FirebaseError.
//initalizeApp se utiliza para inicar la conexion con FIREBASE.

//getFirestore se utiliza para obtener una instancia de Firestore.
//Esto es un objetoq eu contiene toda nuestra informacion de cuenta junto con la apikey
const firebaseConfig = {
    apiKey: "AIzaSyDe-p506hv_0cA5UDogUY7zxT5d0A0uGhw",
    authDomain: "tienda-coder-reactjs-18bcc.firebaseapp.com",
    projectId: "tienda-coder-reactjs-18bcc",
    storageBucket: "tienda-coder-reactjs-18bcc.appspot.com",
    messagingSenderId: "1076452790829",
    appId: "1:1076452790829:web:0430efbfe340d6e5fe9ea4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)