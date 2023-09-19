const select = document.querySelector('.js_select');
const btnPlay = document.querySelector('.js_btnPlay');
const msn = document.querySelector('.js_msn');
const playerScore = document.querySelector('.js_playerScore');
const computerScore = document.querySelector('.js_computerScore');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function computerMovement() {
  let randomNum = getRandomNumber(9);
  let result = '';
  if (randomNum <= 3) {
    result = 'piedra';
  } else if (randomNum >= 7) {
    result = 'papel';
  } else {
    result = 'tijera';
  }
  return result;
}
function playerMovement() {}

function handleClickPlay(event) {
  event.preventDefault();
}

btnPlay.addEventListener('click', handleClickPlay);
