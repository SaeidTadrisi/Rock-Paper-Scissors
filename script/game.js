let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore ();

function playGame(playerMove) {

  const computerMove = cumputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
    } else if (computerMove === 'paper') {
      result = 'You Lose!';
    } else if (computerMove === 'scissors') {
      result = 'You Win!';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Tie!';
    } else if (computerMove === 'paper') {
      result = 'You Lose!';
    } else if (computerMove === 'scissors') {
      result = 'You Win!';
    }
  }

  else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose!';
    } else if (computerMove === 'paper') {
      result = 'You Win!';
    } else if (computerMove === 'scissors') {
      result = 'Tie!';
    }
  }

  if (result === 'You Win!') {
    score.wins += 1;
  }	else if (result === 'You Lose!') {
    score.losses += 1;
  }	else if (result === 'Tie!' ){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore ();

  document.querySelector('.js-result')
    .innerHTML = `${result}`;

    document.querySelector('.js-moves')
    .innerHTML = `You <img src="icons/${playerMove}-emoji.png" class= "icon">  <img src="icons/${computerMove}-emoji.png" class= "icon"> Computer`;
}


function cumputerMove () {

  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
  }

  function updateScore () {
    document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }