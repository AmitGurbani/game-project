import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCuwzMFvzHn4uKx3EGcTQ43tOWn9CfGADs",
  authDomain: "game-project-e3f99.firebaseapp.com",
  projectId: "game-project-e3f99",
  storageBucket: "game-project-e3f99.appspot.com",
  messagingSenderId: "796175015785",
  appId: "1:796175015785:web:39e0b2211b14928b8ba7f8",
  measurementId: "G-FSRGJNT2ZN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;