const randomNo=parseInt(Math.random()*100+1);
console.log(randomNo);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guesslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');


const p =document.createElement('p');
let preGuess=[];
let numGuess=1;
let playGame=true;

if(playGame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGess(guess);
    })
}
 
   
function validateGess(guess)
{
    if(isNaN(guess))
    {
alert('Plaese enter valid no');
    }
    else if(guess<1)
    {
alert('Plaese enter valid no');

    }
    else if(guess>100)
    {
alert('Plaese enter valid no');

    }
    else{

   
    preGuess.push(guess)
    if(numGuess==11)
    {
        displayGuess(guess)
        displayMessage(`Game Over.Randm No was ${randomNo}`)
        gameEnd()

    }
    else{
        displayGuess(guess)
        cheackGuess(guess)
    }
}
}
function cheackGuess(guess)
{
    if(guess===randomNo)
    {
        displayMessage(`You Guess It Right`);
        gameEnd()
    }
    else if(guess<randomNo)
    {
        displayMessage(`Number is Too low`)
    }
    else if(guess>randomNo)
    {
        displayMessage(`Number is Too Hight`);
    }
}
 function displayMessage(message)
 {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
 }
 function displayGuess(guess)
 {
    userInput.value='';
    guesslot.innerHTML +=`${guess},`;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`

 }
 function gameEnd()
 {
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false
    newGame();

 }
 function newGame()
 {
    const newGameButton=document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(e){
        const randomNo=parseInt(Math.random()*100+1);
        let preGuess=[];
        let numGuess=1;
        guesslot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
 }

