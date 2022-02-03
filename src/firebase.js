import firebase from "firebase";
import "firebase/auth"

const app=firebase.initializeApp({
    apiKey: "AIzaSyCPN7iYoQ1T-wceK3QdCW54WM6XEwYzxbM",
  authDomain: "react-auth-8968e.firebaseapp.com",
  projectId: "react-auth-8968e",
  storageBucket: "react-auth-8968e.appspot.com",
  messagingSenderId: "1044436483518",
  appId: "1:1044436483518:web:e953edfb103c557b9e0def"
})
var db=app.firestore();

export const auth=app.auth();
export{db};
export default app;