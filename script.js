let correctGuess = Math.floor((Math.random() * 100) + 1);
console.log(correctGuess);
let maxGuesses = 10;
let currentGuesses = 0;

function guessingGame(num){
while(currentGuesses < maxGuesses){
    let userGuess = Number(window.prompt("Enter your guess"));
if (userGuess === correctGuess) {
    alert("Nice job! You guessed correctly!");
    break;
} else {
    currentGuesses += 1;
    let guessesLeft = maxGuesses - currentGuesses;
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
} }