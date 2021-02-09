
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAlDEROpOjXPpHD0V6SdOPTxfWYCBFWaLs",
      authDomain: "kwitter-f82c7.firebaseapp.com",
      projectId: "kwitter-f82c7",
      storageBucket: "kwitter-f82c7.appspot.com",
      messagingSenderId: "150666213475",
      appId: "1:150666213475:web:97ab76904a275371372056"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
