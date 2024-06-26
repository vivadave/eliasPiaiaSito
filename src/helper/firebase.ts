import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "sito-elisa-b24a8.firebaseapp.com",
  projectId: "sito-elisa-b24a8",
  storageBucket: "sito-elisa-b24a8.appspot.com",
  messagingSenderId: "165874012018",
  appId: "1:165874012018:web:a8fde4d429da6bc1f1d7eb",
  measurementId: "G-3CMQ7CTCGH"
};

const initializeFirebase = (apiKey: string) => {
  firebaseConfig.apiKey = apiKey;
  initializeApp(firebaseConfig);
}

const getCollection = async (collectionName: 'translation') => {  
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const collect = collection(db, collectionName);
  const collectionList = await getDocs(collect);
  const collectionData = collectionList.docs.map((doc) => doc.data());
  return collectionData;
}

const updateDocument = async (collectionName: 'translation', docId: string, data: any) => {
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const collect = collection(db, collectionName);
  const res = await setDoc(doc(collect, docId), data);
}

export { initializeFirebase, getCollection, updateDocument }