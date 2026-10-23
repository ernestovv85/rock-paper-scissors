const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result-text');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    resultText.textContent = `It's a tie! You both chose ${humanSelection}.`;
  } else if (
    (humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    resultText.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;
  }

  playerScoreEl.textContent = `Player Score: ${playerScore}`;
  computerScoreEl.textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
		const winner =
			playerScore === 5
				? '¡You win the game!'
				: '¡Computer wins the game!';
		resultText.textContent =
			winner +
			' Final Score: Player ' +
			playerScore +
			' - ' +
			computerScore +
			' Computer';

		rockButton.disabled = true;
		paperButton.disabled = true;
		scissorsButton.disabled = true;
	}
}

rockButton.addEventListener('click', () =>
	playRound('rock', getComputerChoice())
);
paperButton.addEventListener('click', () =>
	playRound('paper', getComputerChoice())
);
scissorsButton.addEventListener('click', () =>
	playRound('scissors', getComputerChoice())
);