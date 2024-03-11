'use strict';
const select = document.querySelector('.js_select');
const btnPlay = document.querySelector('.js_btnPlay');
const btnRestart = document.querySelector('.js_btnRestart');
const msn = document.querySelector('.js_msn');
const playerScore = document.querySelector('.js_playerScore');
const computerScore = document.querySelector('.js_computerScore');
const msnLost = '¡Has perdido!';
const msnWin = '¡Has ganado!';

playerScore.innerHTML = 0;
computerScore.innerHTML = 0;
let movements = 1;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function btnDisplay(btnAdd, btnRemove) {
  btnAdd.classList.add('hidden');
  btnRemove.classList.remove('hidden');
}

function countMovemenst() {
  if (movements <= 9) {
    movements += 1;
  } else if (movements === 10) {
    if (computerScore.innerHTML > playerScore.innerHTML) {
      msn.innerHTML = '¡HAS PERDIDO =( ! ';
    } else if (computerScore.innerHTML < playerScore.innerHTML) {
      msn.innerHTML = '¡HAS GANADO =) ! ';
    } else {
      msn.innerHTML = '¡EMPATE! =) ! ';
    }
    btnDisplay(btnPlay, btnRestart);
  }
}

function computerMovement() {
  const randomNum = getRandomNumber(9);
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
function computerWin(computerResult) {
  msn.innerHTML = msnLost + `La computadora ha elegido ${computerResult}`;
  computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
}
function playerWin(computerResult) {
  msn.innerHTML = msnWin + `La computadora ha elegido ${computerResult}`;
  playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
}

function compareMovements() {
  const playerResult = select.value;
  const computerResult = computerMovement();
  if (playerResult != '') {
    if (playerResult === computerResult) {
      msn.innerHTML = `¡Empate! La computadora ha elegido ${computerResult}`;
    } else if (playerResult === 'piedra') {
      if (computerResult === 'papel') {
        computerWin(computerResult);
      } else if (computerResult === 'tijera') {
        playerWin(computerResult);
      }
    } else if (playerResult === 'papel') {
      if (computerResult === 'piedra') {
        playerWin(computerResult);
      } else if (computerResult === 'tijera') {
        computerWin(computerResult);
      }
    } else {
      if (computerResult === 'piedra') {
        computerWin(computerResult);
      } else if (computerResult === 'papel') {
        msn.innerHTML = msnWin;
        playerWin(computerResult);
      }
    }
    countMovemenst();
  } else {
    msn.innerHTML = 'Seleccione una jugada válida';
  }
}

function handleClickPlay(event) {
  event.preventDefault();
  compareMovements();
}

function handleClickRestart(event) {
  event.preventDefault();
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  movements = 0;
  btnDisplay(btnRestart, btnPlay);
  msn.innerHTML = '¡Vamos a Jugar!';
}

btnPlay.addEventListener('click', handleClickPlay);
btnRestart.addEventListener('click', handleClickRestart);
