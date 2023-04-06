const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("messages");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const message = messageInput.value;
  const username = "Utilisateur";
  const timestamp = new Date().toLocaleString("fr-FR");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `<span class="username">${username}</span><span class="timestamp">${timestamp}</span><br>${message}`;
  messages.appendChild(messageElement);
  messageInput.value = "";
}
