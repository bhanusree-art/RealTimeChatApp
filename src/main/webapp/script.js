const ws = new WebSocket("ws://localhost:8080/RealTimeChatApp/chatEndpoint");

ws.onmessage = function(event) {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.textContent = event.data;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
};

document.getElementById("send-button").addEventListener("click", function() {
    const input = document.getElementById("message-input");
    const message = input.value;
    if (message) {
        ws.send(message);
        input.value = "";
    }
});