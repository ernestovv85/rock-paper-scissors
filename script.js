const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result-text');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

rockButton.addEventListener('click', () =>
	playRound('rock', getComputerChoice())
);
paperButton.addEventListener('click', () =>
	playRound('paper', getComputerChoice())
);
scissorsButton.addEventListener('click', () =>
	playRound('scissors', getComputerChoice())
);

function getHumanChoice() {}

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(humanSelection, computerSelection) {}
