// import firebase from 'firebase/compat/app';
// // import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// // import { auth } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js'
// import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'
import firebase from 'firebase';
// import 'firebase/auth';


// const firebaseConfig = {
//   apiKey: "AIzaSyAHDTrxBH_f66LKf2ubZqtmrngNbS5oP5c",
//   authDomain: "whatsapp-clone-b2133.firebaseapp.com",
//   projectId: "whatsapp-clone-b2133",
//   storageBucket: "whatsapp-clone-b2133.appspot.com",
//   messagingSenderId: "368454542782",
//   appId: "1:368454542782:web:8197af38be4e0e474c45ef",
//   measurementId: "G-66Q4M9D36W"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const Db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default Db;