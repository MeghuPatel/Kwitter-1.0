// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1We1vGJyRi0q9rHCGPH68MrMTEbklVFw",
  authDomain: "kwitterapp-a0704.firebaseapp.com",
  databaseURL: "https://kwitterapp-a0704-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-a0704",
  storageBucket: "kwitterapp-a0704.appspot.com",
  messagingSenderId: "355370708425",
  appId: "1:355370708425:web:e06ef84e417cb140d9cc18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class = 'room name' id=" +Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "index.html";
}
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(rooom_name).update({
        pupose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "index.html";
}