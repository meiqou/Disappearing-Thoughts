const firebaseConfig = {
  apiKey: "AIzaSyAep1mcceiSO0S2ylum-zpzoD58Fx-rcpY",
  authDomain: "disappearing-thoughts.firebaseapp.com",
  databaseURL: "https://disappearing-thoughts-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "disappearing-thoughts",
  storageBucket: "disappearing-thoughts.appspot.com",
  messagingSenderId: "92776706019",
  appId: "1:92776706019:web:3e9a9c76bf418148dd7ad6",
  measurementId: "G-SKK4SRE5P6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('chat-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== '') {
    appendMessageToFirebase(userInput);
    document.getElementById('user-input').value = '';
    
  }
});

function submitForm(e){
  e.preventDefault();
  var text = getElementVal('text');
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
// Function to append a new chat message to Firebase
function appendMessageToFirebase(message) {
  database.ref('chat_messages').push({
    message: message
  });


window.onload = function() {
  fetchChatMessagesFromFirebase();
};
}







