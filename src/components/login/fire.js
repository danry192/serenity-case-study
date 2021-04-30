import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAXNGPYEOZsCE90zQotm_rdso4Oq_1Kwt4",
  authDomain: "serenity-login-b7419.firebaseapp.com",
  projectId: "serenity-login-b7419",
  storageBucket: "serenity-login-b7419.appspot.com",
  messagingSenderId: "699289621589",
  appId: "1:699289621589:web:1cb33afd4ac452e9c130dc"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

