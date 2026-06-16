//Validate the form of a document
const form = document.querySelector('#guessForm');
const response = document.querySelector('#response');
const previous = document.querySelector('#previous');

//Define Reset Button
const resetButton = document.createElement("button");
resetButton.textContent = "Start New Game";

//Define variables
let ans = Math.floor(Math.random()*99) + 1;
let guesses = [];


//Reset everything to base game state
const resetGame = function(){
    //generate new number and clear guesses
    ans = Math.floor(Math.random()*99) + 1;
    guesses = [];

    //Hide and reset previous guesses
    previous.style = "visibility: invisible;";
    previous.textContent = "Previous Guesses:";
    
    //Enable and focus form
    form.guess.removeAttribute('disabled')
    form.guess.focus();

    //Reset the response text and class
    response.textContent = "";
    response.removeAttribute('class')

    //Remove Reset Button
    resetButton.parentNode.removeChild(resetButton);
};

//Stops game input and enables new game button
const endGame = function(){
    form.guess.setAttribute('disabled', true)

    document.querySelector("#guessingGame").appendChild(resetButton);
    resetButton.focus();
};

//Checks the current guess and changes the response
const checkGuess = function(){
    const guess = form.guess.value;
    
    if (guess >= 1 && guess <= 100){ //Checks if number is valid
        if (guess == ans){
            //Edit response
            response.textContent = `Correct! The answer was ${ans}.`;
            response.setAttribute('class', 'correct');
            
            //Add new guess to previous guesses
            guesses.push(guess);
            previous.textContent += ` ${guess}`;
    
            endGame();
        }
        else if (guesses.length >= 9){ //If its the last guess
            //Edit response
            response.textContent = `Too Many Guesses! The answer was ${ans}.`;
            response.setAttribute('class', 'tooMany');
            
            //Add new guess to previous guesses
            guesses.push(guess);
            previous.textContent += ` ${guess}`;
    
            endGame();
        }
        else if (guess < ans){ //If the guess is too small
            //Edit response
            response.textContent = "Higher!";
            response.setAttribute('class', 'higher');
            
            //Add new guess to previous guesses
            guesses.push(guess);
            previous.textContent += ` ${guess}`;
        }
        else if (guess > ans){ //If the guess is too large
            //Edit response
            response.textContent = "Lower!";
            response.setAttribute('class', 'lower');
            
            //Add new guess to previous guesses
            guesses.push(guess);
            previous.textContent += ` ${guess}`;
        };
        
        //Show the Previous guesses
        previous.style = "visibility: visible;";
    };
};


//On form submit
form.addEventListener('submit', e => {
    e.preventDefault();

    //validate guess
    checkGuess();
    form.reset();
});

resetButton.addEventListener('click', e=> {
    resetGame();
});