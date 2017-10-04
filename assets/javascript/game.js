
// Array of possible answers

var characters = ["Bob Sacamano", "Cousin Jeffrey", "Jack Klompus", "Jerry Seinfeld",
    "Elaine Benes", "Cosmo Kramer", "George Costanza",];

var userText = document.getElementById("user-text");

// Computer randomly select a possible answer from array

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = characters[Math.floor(Math.random() * characters.length)];

    if (userGuess === "a") {
        console.log(computerGuess)
    }
}


// Listen for user input




// Compare user input with randomly selected answer




// Display correct letters when selected


// Display all guesses below


// All letters guessed that are NOT a part of answer is a strike (up to 10)


// When all correct letters have been guessed, play celebration


// Restart the game