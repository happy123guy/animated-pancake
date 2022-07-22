
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAlE6cOZp-CucyRIbTXnLl6ubReqg-XxO8",
      authDomain: "kwitter-d509e.firebaseapp.com",
      databaseURL: "https://kwitter-d509e-default-rtdb.firebaseio.com",
      projectId: "kwitter-d509e",
      storageBucket: "kwitter-d509e.appspot.com",
      messagingSenderId: "802316476434",
      appId: "1:802316476434:web:670f45dc37ac013d11b8cb"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location = "index.html";
}