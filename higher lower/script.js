const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;
console.log(randomNumber);

function checkGuess() {
    const guess = parseInt(document.getElementById('number').value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        setMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        document.getElementById('number').disabled = true;
    } else if (guess < randomNumber) {
        setMessage('Higher! Try again.');
    } else {
        setMessage('Lower! Try again.');
    }
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}
