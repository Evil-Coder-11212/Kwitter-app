//YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyA8kAvKyAqAqxzhBHwwx3dxaHIZC66pytA",
  authDomain: "practice-59e5e.firebaseapp.com",
  databaseURL: "https://practice-59e5e-default-rtdb.firebaseio.com",
  projectId: "practice-59e5e",
  storageBucket: "practice-59e5e.appspot.com",
  messagingSenderId: "726106800755",
  appId: "1:726106800755:web:25623ac5738424b2302006",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const username = localStorage.getItem("username");
const roomName = localStorage.getItem("room-name");

function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          //End code
        }
      });
    });
}
getData();

const send = () => {
  const messageValue = document.querySelector("#msg").value;
  firebase.database().ref(roomName).push({
    name: username,
    msg: messageValue,
    like: 0,
  });
  messageValue.value = "";
};

const logout = () => {
  localStorage.removeItem("room-name");
  localStorage.removeItem("username");
};
