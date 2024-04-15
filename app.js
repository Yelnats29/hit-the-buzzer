//Assignment of references
const buzzerBtn = document.getElementById("buzzer")
const messageElement = document.getElementById("message")
const victory = document.getElementById("buttonSound")

//Function to have a random number of 1-3 be rolled
function randomCookie() {
    return Math.floor(Math.random() * 3) + 1;
}

//Function to get the message to show
function messageDisplay(message) {
    messageElement.textContent = message
}

//Function to clear message after button press
function clearMessage() {
    setTimeout(function () {
        messageDisplay("")
    }, 8000);
}

//Function to clear cookie image after button press
function clearImage() {
    setTimeout(() => {
        sugarCookieImage.classList.add('hiddenSugar');
        chocolateCookieImage.classList.add('hiddenChocolate');
        oatmealCookieImage.classList.add('hiddenOatmeal');
    }, 4000);
}


//Function for Button Action
function buzzerClicked() {
    messageDisplay("");
    messageDisplay("Looks like someone just got a giant cookie! Congrats!");
    victory.play();
    clearMessage();

    const cookie = randomCookie();

    // Display the choices
    const cookies = ['Sugar Cookie', 'Chocolate Chip Cookie', 'Oatmeal Cookie'];

    setTimeout(() => {
        if (cookie === 1) {
            message.textContent = `You got a ${cookies[0]}! It's SUPER sweet!`;
            message.className = 'cookie1';
            sugarCookieImage.classList.remove('hiddenSugar'); clearImage();
        } else if (cookie === 2) {
            message.textContent = `You got a ${cookies[1]}! Nothing wrong with the classics!`;
            message.className = 'cookie2';
            chocolateCookieImage.classList.remove('hiddenChocolate'); clearImage();
        } else {
            message.textContent = `You got a ${cookies[2]}! A personal favorite.`;
            message.className = 'coookie3';
            oatmealCookieImage.classList.remove('hiddenOatmeal'); clearImage();
        }
   }, 4000);
}

//This makes the button activate
buzzerBtn.addEventListener('click', buzzerClicked);