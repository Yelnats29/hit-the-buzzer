//Assignment of references
const buzzerBtn = document.getElementById("buzzer")
const messageElement = document.getElementById("message")
const victory = document.getElementById("buttonSound")


//Function to get the message to show
function messageDisplay(message) {
    messageElement.textContent = message
}

//Function to clear message after button press
function clearMessage() {
    setTimeout(function () {
        messageDisplay("")
    }, 6000);
}


//Function for Button Action
function buzzerClicked() {
    messageDisplay("");
    messageDisplay("Looks like someone just got a giant cookie! Congrats!");
    victory.play();
    clearMessage();
}

//This makes the button activate
buzzerBtn.addEventListener('click', buzzerClicked);