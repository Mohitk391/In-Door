import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAv_3BivtD76c3Zd-lfmM_LvIiId3RPhzo",
    authDomain: "inatdoor-f0927.firebaseapp.com",
    projectId: "inatdoor-f0927",
    storageBucket: "inatdoor-f0927.appspot.com",
    messagingSenderId: "447673448300",
    appId: "1:447673448300:web:b9a13106109fd8c05c2549",
    measurementId: "G-NVWY1GWKMW"
  };

  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app, "gs://inatdoor-f0927.appspot.com");