import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDbNMVo8LmCQIxny2j4VkCDquXmuHw6BtU",
  authDomain: "mymoney-e9db6.firebaseapp.com",
  projectId: "mymoney-e9db6",
  storageBucket: "mymoney-e9db6.appspot.com",
  messagingSenderId: "292166213069",
  appId: "1:292166213069:web:f638fce1d69c0797c2b884"
};

//init firebase
 firebase.initializeApp(firebaseConfig)

 //init service
 const projectFirestore = firebase.firestore()
 const projectAuth = firebase.auth()

 export { projectFirestore, projectAuth }