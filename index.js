const minNumber = 1;
const maxNumber = 100;
const secretNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const resultElement = document.getElementById("result");
  const hintElement = document.getElementById("hint");

  if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
    resultElement.textContent =
      "Please enter a valid number within the specified range.";
    hintElement.textContent = "";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    resultElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    hintElement.textContent = "";
  } else if (userGuess < secretNumber) {
    resultElement.textContent = "Wrong guess. Try again!";
    hintElement.textContent = "Hint: The number is higher.";
  } else {
    resultElement.textContent = "Wrong guess. Try again!";
    hintElement.textContent = "Hint: The number is lower.";
  }
}
