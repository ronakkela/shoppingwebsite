import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyApt1m7CmXbtiryp5B-ulBcMm6XmbFhOSo",
    authDomain: "shopping-371b1.firebaseapp.com",
    projectId: "shopping-371b1",
    storageBucket: "shopping-371b1.appspot.com",
    messagingSenderId: "817431034011",
    appId: "1:817431034011:web:145701839280ac43ccee3e"
  };
  

 const fire = firebase.initializeApp(firebaseConfig);

 export default firebase;