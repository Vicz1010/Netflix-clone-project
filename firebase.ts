// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmUd6fviVIxCTl3ijvLGOoIayz3enDQ_k",
    authDomain: "netflix-clone-55b50.firebaseapp.com",
    projectId: "netflix-clone-55b50",
    storageBucket: "netflix-clone-55b50.appspot.com",
    messagingSenderId: "955097269477",
    appId: "1:955097269477:web:68c42cb6c00ae455ae800c"
  }

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }