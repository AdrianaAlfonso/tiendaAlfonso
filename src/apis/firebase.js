import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const getCollection = async (collectionName) => {
  // hice que se guarde en el localStorage para evitar consumir la quota gratis de firebase
  const cachedCollection = localStorage.getItem(collectionName);
  if (cachedCollection) {
    return JSON.parse(cachedCollection);
  }

  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => doc.data());

  localStorage.setItem(collectionName, JSON.stringify(data));
  return data;
};

export const createItemDoc = async (collectionName, data) => {
  const itemCollection = collection(db, collectionName);
  const docRef = doc(itemCollection);
  await setDoc(docRef, data);
  localStorage.removeItem(collectionName); // Invalidamos la cache
};

// actualizar un documento en la coleccion
export const updateItemDoc = async (collectionName, docId, data) => {
  const docRef = doc(db, collectionName, docId);
  await setDoc(docRef, data, { merge: true });
  localStorage.removeItem(collectionName); // Invalidamos la cache
};

export const getAllFirebaseItem = async (collectionName) => {
  const itemCollection = getCollection(collectionName);
  return itemCollection;
};

export const getFirebaseItem = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
