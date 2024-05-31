document.addEventListener('DOMContentLoaded', function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const feedback = document.getElementById('feedback');

    guessButton.addEventListener('click', function () {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
            feedback.style.color = 'red';
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the right number (${randomNumber}).`;
            feedback.style.color = 'green';
            guessButton.disabled = true;
        } else if (attempts > 0) {
            feedback.textContent = userGuess < randomNumber ? 'Too low!' : 'Too high!';
            feedback.style.color = 'army';
            feedback.textContent += ` You have ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'} left.`;
        } else {
            feedback.textContent = `Sorry, you've run out of attempts. The number was ${randomNumber}.`;
            feedback.style.color = 'red';
            guessButton.disabled = true;
        }

        guessInput.value = '';
    });
});
