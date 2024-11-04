function guessingGame() {
    // variables
    let correctGuess = Math.floor((Math.random() * 100) + 1);
    console.log(correctGuess); // our cheat code to know answer
    let maxGuesses = 10;
    let currentGuesses = 0;
    
    while (currentGuesses < maxGuesses) {
        let guesses = document.getElementById("guesses");
        let userGuess = Number(window.prompt("Enter your guess"));
        if (userGuess === correctGuess) {
            guesses.innerHTML = guesses.innerHTML + ` ${userGuess}`;
            alert("Nice job! You guessed correctly!");
            break;
        } else {
            currentGuesses += 1;
            let guessesLeft = maxGuesses - currentGuesses;
            guesses.innerHTML = guesses.innerHTML + ` ${userGuess}` + ",";
            if (userGuess > correctGuess) {
                alert(`Try again, it's lower than ${userGuess}. You have ${guessesLeft} guesses left!`);
            } else if (userGuess < correctGuess) {
                alert(`Try again, it's higher than ${userGuess}. You have ${guessesLeft} guesses left!`);
            }
        }
        if (currentGuesses >= maxGuesses) {
            alert(`Game over! The correct number was ${correctGuess}.`);
            break;
        }
    }
}
