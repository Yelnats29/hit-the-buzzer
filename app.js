//First Assignment of elements
const buzzerBtn = document.getElementById("buzzer")
const messageElement = document.getElementById("message")


    //Function to get the message to show
    function messageDisplay(message) {
        messageElement.textContent = message
    }

    //Function for Button Action
    function buzzerClicked() {
        messageDisplay("Looks like someone just got a giant cookie!");
    }

    //This makes the button activate
    buzzerBtn.addEventListener('click', buzzerClicked);