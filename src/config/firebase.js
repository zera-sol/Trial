
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHPcWmKJSDh5iJgqi0vw2hIHaVOaF46Fw",
  authDomain: "zera-sol-portfolio.firebaseapp.com",
  projectId: "zera-sol-portfolio",
  storageBucket: "zera-sol-portfolio.appspot.com",
  messagingSenderId: "279423528438",
  appId: "1:279423528438:web:21e4d2e624de8b43692bd7",
  measurementId: "G-FY269CHMCR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);