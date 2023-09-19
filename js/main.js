const select = document.querySelector('.js_select');
const btnPlay = document.querySelector('.js_btnPlay');
const msn = document.querySelector('.js_msn');
const playerScore = document.querySelector('.js_playerScore');
const computerScore = document.querySelector('.js_computerScore');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
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
  console.log(result);
  return result;
}

const msnLost = '¡Has perdido!';
const msnWin = '¡Has ganado!';
function compareMovements() {
  const playerResult = select.value;
  const computerResult = computerMovement();
  if (playerResult === computerResult) {
    msn.innerHTML = 'Empate';
  } else if (playerResult === 'piedra') {
    if (computerResult === 'papel') {
      msn.innerHTML = msnLost;
    } else if (computerResult === 'tijera') {
      msn.innerHTML = msnWin;
    }
  } else if (playerResult === 'papel') {
    if (computerResult === 'piedra') {
      msn.innerHTML = msnWin;
    } else if (computerResult === 'tijera') {
      msn.innerHTML = msnLost;
    }
  } else {
    if (computerResult === 'piedra') {
      msn.innerHTML = msnLost;
    } else if (computerResult === 'papel') {
      msn.innerHTML = msnWin;
    }
  }
}

function handleClickPlay(event) {
  event.preventDefault();
  compareMovements();
}

btnPlay.addEventListener('click', handleClickPlay);
