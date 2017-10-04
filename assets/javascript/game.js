
// Array of possible answers

var characters = ["Bob Sacamano", "Cousin Jeffrey", "Jack Klompus", "Jerry Seinfeld",
    "Elaine Benes", "Cosmo Kramer", "George Costanza",];

// Computer randomly select a possible answer from array

for (var i = 0; i < characters.length; i++) {
    console.log("Do you know " + characters[i]);
}

// Listen for user input



document.onkeyup = function (event) {
    userText.textContent = event.key;
};

var userText = document.getElementById("user-text");

// Compare user input with randomly selected answer

if (characters[j].charAt(0) === "c" || characters[j].charAt(0) === "o") {
    alert("Starts with a c or an o!");
}

// Display correct letters when selected


// Display all guesses below


// All letters guessed that are NOT a part of answer is a strike (up to 10)


// When all correct letters have been guessed, play celebration


// Restart the game