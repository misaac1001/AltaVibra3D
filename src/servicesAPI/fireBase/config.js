// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4AozmxPQz7X66eoZ_mmxLHD96J6JehO4",
  authDomain: "alta-vibra-3d.firebaseapp.com",
  projectId: "alta-vibra-3d",
  storageBucket: "alta-vibra-3d.appspot.com",
  messagingSenderId: "131693094011",
  appId: "1:131693094011:web:bce701a28d779bc82e6ede",
  measurementId: "G-MJYW5V0TNX"
};


const app = initializeApp(firebaseConfig);

export const firebaseConection = () => app;

