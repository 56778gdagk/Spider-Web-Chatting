user_name = "";
room_name = "";

var firebaseConfig = {
    apiKey: "AIzaSyAytelJakl43_o9JSx5cVyl_p8p3uuDZ1g",
    authDomain: "spider-web-chatting-app.firebaseapp.com",
    databaseURL: "https://spider-web-chatting-app-default-rtdb.firebaseio.com",
    projectId: "spider-web-chatting-app",
    storageBucket: "spider-web-chatting-app.appspot.com",
    messagingSenderId: "191623987038",
    appId: "1:191623987038:web:393e5d2d254e0b2fdb99cf"
  }

  function send()
  {
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
  }

function logout()
{
    window.location = "SpiderWeb_room.html";
}