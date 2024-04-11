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

//Funtion to select the cookie of choice

//Show this with a slow timer and then transition in the picture of the selected cookie.
// My browser game has an example of this with Will and my burger menu has a code for slow transitions.

// Lets also replace the button with the cookie after the selection??

// Can I then replace the cookie with a bit version of it and say a message such as, "I hope you enjoyed that as much as I did" or "such a satisfying crunch" with a crunch audio behind it.

//This makes the button activate
buzzerBtn.addEventListener('click', buzzerClicked);