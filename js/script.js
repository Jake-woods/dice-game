// Variable inits
const whoWonTitle = document.querySelector('h1.title');
const playerOneWinCountSpan = document.querySelector('.p1-win-counter');
const playerTwoWinCountSpan = document.querySelector('.p2-win-counter');
const diceBtn = document.querySelector('button.dice');
const diceImgOne = document.querySelector('img.dice1');
const diceImgTwo = document.querySelector('img.dice2');
const diceArr = [
   './img/dice1.png',
   './img/dice2.png',
   './img/dice3.png',
   './img/dice4.png',
   './img/dice5.png',
   './img/dice6.png'
];
let playerOneWinCount = 0;
let playerTwoWinCount = 0;
// Function for game
const gameInitialised = function () {
   // Remove dice animation
   diceBtn.classList.remove('click-me');

   // Random Number generator
   const randomNumberOne = Math.floor(Math.random() * 6 + 1);
   const randomNumberTwo = Math.floor(Math.random() * 6 + 1);

   // Change images according to rolled number
   diceImgOne.setAttribute('src', diceArr[randomNumberOne - 1]);
   diceImgTwo.setAttribute('src', diceArr[randomNumberTwo - 1]);

   // Change title depending on who wins
   if (randomNumberOne > randomNumberTwo) {
      whoWonTitle.textContent = 'Player one wins';
      playerOneWinCount++;
   } else if (randomNumberTwo > randomNumberOne) {
      whoWonTitle.textContent = 'Player two wins';
      playerTwoWinCount++;
   } else {
      whoWonTitle.textContent = 'Draw!';
      playerOneWinCount++;
      playerTwoWinCount++;
   }
   // Set the wincount (Number)
   playerOneWinCountSpan.textContent = playerOneWinCount;
   playerTwoWinCountSpan.textContent = playerTwoWinCount;
}

diceBtn.addEventListener('click', gameInitialised);