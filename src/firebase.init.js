// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBja81hMiETbGgCajsq_388iA9xTf42A3A",
  authDomain: "ema-jon-simple-f12fe.firebaseapp.com",
  projectId: "ema-jon-simple-f12fe",
  storageBucket: "ema-jon-simple-f12fe.appspot.com",
  messagingSenderId: "570182568864",
  appId: "1:570182568864:web:598b9957514d68770472c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth  
