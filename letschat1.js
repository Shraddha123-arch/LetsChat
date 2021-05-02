//ADD YOUR FIREBASE LINKS HERE
const Config = {
    apiKey: "AIzaSyCtQMK9zsyZCUyGU91hATbjGCf-DxF0780",
    authDomain: "kwitterchatroom.firebaseapp.com",
    projectId: "kwitterchatroom",
    storageBucket: "kwitterchatroom.appspot.com",
    messagingSenderId: "342195701461",
    appId: "1:342195701461:web:329cf8f80f7d6b8be1045c"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose :"adding room name"
    });
    localStorage.setItem("room_name",room_name);

    window.location ="kwitter_page.html";
}
function getData(){   firebase.database().ref("/").on('value' , function(snapshot){
    document.getElementById("output").innerHTML= "";
    snapshot.forEach(function(childSnapshot){
          childKey=childSnapshot.key;
          Room_names=childKey;
          console.log("Room_Name -" + Room_names);
          row= "<div class= 'room_name' id="=+Room_Names+"onclick='redirectToRoomName(this.id)'>#" +Room_names + "</div></hr>"
          document.getElementById("output").innerHTML += row;

    });
});

}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";

}    
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();


