import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAYz8LmtjyLxhy2n7qU9Z8jrAEYDlPif3g",
    authDomain: "aurora-33693.firebaseapp.com",
    projectId: "aurora-33693",
    storageBucket: "aurora-33693.appspot.com",
    messagingSenderId: "148125719046",
    appId: "1:148125719046:web:a830b5ca5d345b41c10187",
    measurementId: "G-XCWYBM27SP"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const analytics = getAnalytics(app);