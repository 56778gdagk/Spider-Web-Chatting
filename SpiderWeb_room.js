var firebaseConfig = {
    apiKey: "AIzaSyAytelJakl43_o9JSx5cVyl_p8p3uuDZ1g",
    authDomain: "spider-web-chatting-app.firebaseapp.com",
    databaseURL: "https://spider-web-chatting-app-default-rtdb.firebaseio.com",
    projectId: "spider-web-chatting-app",
    storageBucket: "spider-web-chatting-app.appspot.com",
    messagingSenderId: "191623987038",
    appId: "1:191623987038:web:393e5d2d254e0b2fdb99cf"
  }

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         //Start code
         console.log("Room Name" + Room_names);
   
         row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'> "+ Room_names +"</div> <hr>" ;
         document.getElementById("output").innerHTML = row;
         //End code
         });});}
   getData();
   
   function redirectToRoomName(name)
   {
         console.log(name);
   
         localStorage.setItem("room_name", name);
   
         window.location = "SpiderWeb_room.html";
   }
   
   
   user_name = localStorage.getItem("user_name");
   
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
   
   function addRoom()
   {
         Room_names = document.getElementById("room_name").value ;
   
         firebase.database().ref("/").child(Room_names).update({
               purpose : "adding room name"
         }) ;
   
         localStorage.setItem("Room_names", Room_names);
   
         window.location = "SpiderWeb_room.html";
   }
   

