function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return;

    let chatBox = document.getElementById("chatBox");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("userInput").value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(() => {
        let botReply = getBotReply(userInput);
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = botReply;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotReply(input) {
    input = input.toLowerCase();
    const replies = {
        "hello": "Hi there! How can I assist you? 😊",
        "hello dear":"Hi there! How can I assist you? 😊",
        "hi": "Hey! What's on your mind?",
        "how are you": "I'm smarter then my Idiotic Developer Harsh and it feels great!",
        "what's your name": "I'm kinjal, your smart assistant!",
        "what is your name": "I'm kinjal, your smart assistant!",
        "who is your developer":"My developer is an Idiotic boy Harsh ",
        "hey buddy":"Hey my dear Idiotic Developer",
        "hello dear":"Hey my dear Idiotic developer",
        "what are you doing":"I am waiting for your command to do a task as per your requirement ",
        "How old are you":"I am just born yesterday",
        "bye": "Goodbye! Have a great day! 👋",
        "thanks": "You're welcome! 😊",
        "default": "I'm not sure how to respond to that. 🤔 yet I have to learn more from my Idiotic Developer Harsh"
    };

    return replies[input] || replies["default"];
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
