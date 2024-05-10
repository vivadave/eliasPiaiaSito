import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import dotenv from "dotenv";
const firebaseConfig = {
  apiKey: "",
  authDomain: "sito-elisa-b24a8.firebaseapp.com",
  projectId: "sito-elisa-b24a8",
  storageBucket: "sito-elisa-b24a8.appspot.com",
  messagingSenderId: "165874012018",
  appId: "1:165874012018:web:a8fde4d429da6bc1f1d7eb",
  measurementId: "G-3CMQ7CTCGH"
};
const initializeFirebase = (apiKey) => {
  firebaseConfig.apiKey = apiKey;
  initializeApp(firebaseConfig);
};
const getCollection = async (collectionName) => {
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const collect = collection(db, collectionName);
  const collectionList = await getDocs(collect);
  const collectionData = collectionList.docs.map((doc2) => doc2.data());
  return collectionData;
};
const load = async () => {
  dotenv.config();
  console.log(process.env.FIREBASE_API_KEY);
  initializeFirebase(process.env.FIREBASE_API_KEY || "");
  const translations = await getCollection("translation");
  return {
    translations,
    mapsApiKey: process.env.MAPS_API_KEY
  };
};
export {
  load
};
