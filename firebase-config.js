// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Certifique-se de que esta importação está incluída

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "viagensgg-af670.firebaseapp.com",
  projectId: "viagensgg-af670",
  storageBucket: "viagensgg-af670.appspot.com",
  messagingSenderId: "96204398448",
  appId: "1:96204398448:web:dd3a60fc2ea39cbb1439b5",
  measurementId: "G-QDDGM288WH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

