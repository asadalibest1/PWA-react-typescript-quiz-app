import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAGySuuxHC2TvvX8RgwFEKged7F1X6tE7s",
  authDomain: "test-realtime01-fd666.firebaseapp.com",
  databaseURL: "https://test-realtime01-fd666-default-rtdb.firebaseio.com",
  projectId: "test-realtime01-fd666",
  storageBucket: "test-realtime01-fd666.appspot.com",
  messagingSenderId: "301296665733",
  appId: "1:301296665733:web:4b216d37e8901f160355ec"
};

firebase.initializeApp(firebaseConfig);
export default firebase;