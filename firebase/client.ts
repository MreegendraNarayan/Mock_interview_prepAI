
import { initializeApp, getApps, getApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCXUJyw41R1Ray1967FVuJzq72SjpHSvzw",
    authDomain: "smartprep-3e878.firebaseapp.com",
    projectId: "smartprep-3e878",
    storageBucket: "smartprep-3e878.firebasestorage.app",
    messagingSenderId: "118929315160",
    appId: "1:118929315160:web:34533e61bee0140267c12d",
    measurementId: "G-K8N6PTP1YS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);