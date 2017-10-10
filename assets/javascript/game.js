
// Array of possible answers

var characters = ["Bob Sacamano", "Cousin Jeffrey", "Jack Klompus", "Jerry Seinfeld",
    "Elaine Benes", "Cosmo Kramer", "George Costanza"];


var randomNumber = Math.floor(Math.random() * characters.length);

var currentCharacter = characters[randomNumber];

var wrongGuesses = [];

var correctGuesses = [];

var remainingGuesses = 15

// Computer randomly select a possible answer from array (Name the function and then write to run)


console.log(currentCharacter)



// Listen for user input

function mainGame(event) {
    if (letterInWord(currentCharacter, event.key) === false) {
        wrongGuesses.push(event.key)
        remainingGuesses -= 1
    } else {
        correctGuesses.push(event.key)
    }
    console.log(wrongGuesses, correctGuesses)
    console.log(remainingGuesses)
    if (remainingGuesses === 0) {
        console.log("No Soup for You!")
    }
}

document.onkeyup = (mainGame);

function letterInWord(currentCharacter, letter) {
    var lower = currentCharacter.toLowerCase();
    if (lower.indexOf(letter) === -1) {
        return false
    } else {
        return true
    }
}


// count down wrong guesses



// Display all guesses below



// Compare user input with randomly selected answer


// Display correct letters when selected




// All letters guessed that are NOT a part of answer is a strike (up to 10)


// When all correct letters have been guessed, play celebration


// Restart the game