// generate a number between 1 to 10

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Generated number for testing : ${randomNumber}`);

// click event

document.getElementById("guessBtn").addEventListener('click', () =>{
    const userGuess = Number(document.getElementById("userGuess").value);
    const message = document.getElementById("message");


    if(userGuess === randomNumber) {
        message.textContent = 'Congratulations ! You Guessed the Correct Nuber !';
        message.style.color = 'green';
    } else if (userGuess < randomNumber){
        message.textContent = 'too low! try again.'
        message.style.color = 'orange';
    } else if (userGuess > randomNumber) {
        message.textContent = 'too high! try again';
        message.style.color = 'orange';
    } else {
        message.textContent = 'Please enter a valid Number.';
        message.style.color = 'red';
    }
});