const img = document.querySelector('#coinToss img')
const feedback = document.querySelector('#feedback')
const toss = document.querySelector('#toss')
const winsDoc = document.querySelector('#wins')
const lossDoc = document.querySelector('#loss')
const heads = document.querySelector('#heads')
const tails = document.querySelector('#tails')

let wins = 0;
let loss = 0;

//returns if the flip was right or wrong randomly.
//randomly being right or wrong is equivalent to checking if the flip was equal to your guess
function flipCoin(){
    return Math.round(Math.random())
}

heads.addEventListener('click', e => {
    let flip = flipCoin()
    if (flip) wins++; else loss++; 

    img.src = `imgs/${flip ? 'heads.jpg' : 'tails.jpg'}`;

    feedback.removeAttribute('class')

    toss.innerHTML = `
    You Chose Heads<br>
    The toss was ${flip ? "Heads" : "Tails"}<br>
    You were ${flip ? "Right!" : "Wrong!"}`
    
    winsDoc.textContent = wins
    lossDoc.textContent = loss
})

tails.addEventListener('click', e => {
    let flip = flipCoin()
    if (flip) wins++; else loss++; 

    img.src = `imgs/${flip ? 'tails.jpg' : 'heads.jpg'}`;

    feedback.removeAttribute('class')

    toss.innerHTML = `
    You Chose Tails<br>
    The toss was ${flip ? "Tails" : "Heads"}<br>
    You were ${flip ? "Right!" : "Wrong!"}`
    
    winsDoc.textContent = wins
    lossDoc.textContent = loss
})