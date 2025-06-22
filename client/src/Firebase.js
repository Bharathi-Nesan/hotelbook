// Replace with your Firebase config from step 1
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnjBzFBr9wNFHpOr8qN92LB5g4L-JlV_s",
  authDomain: "Hotel Booking.firebaseapp.com",
  projectId: "hotel-booking-7b29d",
  storageBucket: "Hotel Booking.appspot.com",
  messagingSenderId: "SENDER-ID",
  appId: "1:982128955127:web:d765e8c57c0af23abf8df2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
