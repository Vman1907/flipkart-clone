import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import firebase from 'firebase'
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_22AUbJZbH3YTuUo8HVyW5zOaE2ofwxo",
  authDomain: "hello-world-7dfd0.firebaseapp.com",
  projectId: "hello-world-7dfd0",
  storageBucket: "hello-world-7dfd0.appspot.com",
  messagingSenderId: "521111554753",
  appId: "1:521111554753:web:c387f7fb11184a02542240",
};

const app=firebase.initializeApp(firebaseConfig);
const storage = firebase.storage(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }
export default storage;
