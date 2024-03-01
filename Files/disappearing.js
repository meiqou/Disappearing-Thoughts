// Initialize Firebase Realtime Database
const database = firebase.database();

// Function to append a new chat message to Firebase
function appendMessageToFirebase(message) {
  database.ref('chat_messages').push({
    message: message
  });
}

// Function to retrieve chat messages from Firebase
function fetchChatMessagesFromFirebase() {
  database.ref('chat_messages').on('value', function(snapshot) {
    const chatOutput = document.getElementById('chat-output');
    chatOutput.innerHTML = ''; // Clear previous messages
    snapshot.forEach(function(childSnapshot) {
      const message = childSnapshot.val().message;
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageElement.classList.add('neon-text'); // Add class for neon effect
      chatOutput.appendChild(messageElement);
    });
    // Automatically scroll to the bottom of the chat output
    chatOutput.scrollTop = chatOutput.scrollHeight;
  });
}

// Event listener for form submission
document.getElementById('chat-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== '') {
    appendMessageToFirebase(userInput);
    document.getElementById('user-input').value = '';
  }
});

// Fetch chat messages from Firebase on page load
window.onload = function() {
  fetchChatMessagesFromFirebase();
};
