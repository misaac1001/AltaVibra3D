import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4AozmxPQz7X66eoZ_mmxLHD96J6JehO4",
  authDomain: "alta-vibra-3d.firebaseapp.com",
  projectId: "alta-vibra-3d",
  storageBucket: "alta-vibra-3d.appspot.com",
  messagingSenderId: "131693094011",
  appId: "1:131693094011:web:558d3ec8257fea6b2e6ede",
  measurementId: "G-FJSFE40QQG"
};

const app = initializeApp(firebaseConfig);
export const firebaseConection = () => app;
