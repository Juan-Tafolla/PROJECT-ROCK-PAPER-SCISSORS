const container = document.querySelector('#container');


function computerPlay(){

  let x = Math.floor(Math.random() * 3 + 1);
  let message = (x < 2) ? 'rock' :
    (x < 3) ? 'paper' :
    'scissors';

 return message;
    
}

function playRound(playerSelection,computerSelection){

  const playerPara = document.createElement('p');
  playerPara.classList.add('playerPara');
  playerPara.textContent =`You choosed: ${playerSelection}`;
  container.appendChild(playerPara);
  const computerPara = document.createElement('p');
  computerPara.classList.add('computerPara');
  computerPara.textContent = `The PC choosed: ${computerSelection}`;
  container.appendChild(computerPara);

  if (playerSelection == computerSelection){
    message = 'ITS A DRAAW!';
  }else if((playerSelection == 'rock') && (computerSelection == 'scissors')){
    message = 'YOU WIN!';
  }else if((playerSelection == 'rock') && (computerSelection == 'paper')){
    message = 'YOU LOSE!';
  }else if((playerSelection == 'paper') && (computerSelection == 'rock')){
    message = 'YOU WIN!';
  }else if((playerSelection == 'paper') && (computerSelection == 'scissors')){
    message = 'YOU LOSE!';
  }else if((playerSelection == 'scissors') && (computerSelection == 'rock')){
    message = 'YOU LOSE!';
  }else if((playerSelection == 'scissors') && (computerSelection == 'paper')){
    message = 'YOU WIN!';
  }
  const para = document.createElement('p');
  para.classList.add('para');
  para.textContent = `${message}`;
  container.appendChild(para);
}

function main(userInput){
const playerSelection = userInput;
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
}

