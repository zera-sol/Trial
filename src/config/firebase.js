import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDBJGSaYidEdcjiGqzqBKT4VU9b-g0vy5w",
  authDomain: "zera-react-16c82.firebaseapp.com",
  projectId: "zera-react-16c82",
  storageBucket: "zera-react-16c82.appspot.com",
  messagingSenderId: "1052072583227",
  appId: "1:1052072583227:web:69c021038767042581bc1e",
  measurementId: "G-8LVZ9LGGB4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()