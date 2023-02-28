import {
	startConfetti,
	stopConfettiInner,
	removeConfettiInner,
} from './confetti-falling-animation/confetti.js';

const playerScoreElement = document.getElementById('playerScore');
const playerChoiceElement = document.getElementById('playerChoice');
const computerScoreElement = document.getElementById('computerScore');
const computerChoiceElement = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
	rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
	paper: { name: 'Paper', defeats: ['rock', 'spock'] },
	scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
	lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
	spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// reset previous selected
const resetSelected = () => {
	allGameIcons.forEach((icon) => {
		icon.classList.remove('selected');
	});
	stopConfettiInner();
	removeConfettiInner();
};

// reset game
const resetAll = () => {
	playerScoreNumber = 0;
	computerScoreNumber = 0;
	playerScoreElement.textContent = playerScoreNumber;
	computerScoreElement.textContent = computerScoreNumber;
	playerChoiceElement.textContent = '';
	computerChoiceElement.textContent = '';
	resultText.textContent = '';
	resetSelected();
};
window.resetAll = resetAll;

const computerRandomChoice = () => {
	const computerChoiceNumber = Math.random();
	if (computerChoiceNumber < 0.2) {
		computerChoice = 'rock';
	} else if (computerChoiceNumber <= 0.4) {
		computerChoice = 'paper';
	} else if (computerChoiceNumber <= 0.6) {
		computerChoice = 'scissors';
	} else if (computerChoiceNumber <= 0.8) {
		computerChoice = 'lizard';
	} else {
		computerChoice = 'spock';
	}
};

const displayComputerChoice = () => {
	switch (computerChoice) {
		case 'rock':
			computerRock.classList.add('selected');
			computerChoiceElement.textContent = ' --- Rock';
			break;
		case 'paper':
			computerPaper.classList.add('selected');
			computerChoiceElement.textContent = ' --- Paper';
			break;
		case 'scissors':
			computerScissors.classList.add('selected');
			computerChoiceElement.textContent = ' --- Scissors';
			break;
		case 'lizard':
			computerLizard.classList.add('selected');
			computerChoiceElement.textContent = ' --- Lizard';
			break;
		case 'spock':
			computerSpock.classList.add('selected');
			computerChoiceElement.textContent = ' --- Spock';
			break;
		default:
			break;
	}
};

// update score
const updateScore = (playerChoice) => {
	if (playerChoice === computerChoice) {
		resultText.textContent = "'It's a Tie!";
	} else {
		const choice = choices[playerChoice];

		if (choice.defeats.indexOf(computerChoice) > -1) {
			startConfetti();
			resultText.textContent = 'You Won!';
			playerScoreNumber++;
			playerScoreElement.textContent = playerScoreNumber;
		} else {
			resultText.textContent = 'You Lose';
			computerScoreNumber++;
			computerScoreElement.textContent = computerScoreNumber;
		}
	}
};

// turn process
const checkResult = (playerChoice) => {
	resetSelected();
	computerRandomChoice();
	displayComputerChoice();
	updateScore(playerChoice);
};

//player choice
const select = (playerChoice) => {
	checkResult(playerChoice);
	switch (playerChoice) {
		case 'rock':
			playerRock.classList.add('selected');
			playerChoiceElement.textContent = ' --- Rock';
			break;
		case 'paper':
			playerPaper.classList.add('selected');
			playerChoiceElement.textContent = ' --- Paper';
			break;
		case 'scissors':
			playerScissors.classList.add('selected');
			playerChoiceElement.textContent = ' --- Scissors';
			break;
		case 'lizard':
			playerLizard.classList.add('selected');
			playerChoiceElement.textContent = ' --- Lizard';
			break;
		case 'spock':
			playerSpock.classList.add('selected');
			playerChoiceElement.textContent = ' --- Spock';
			break;
		default:
			break;
	}
};
window.select = select;

resetAll();
