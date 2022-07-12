
function computerPlay(){

  let x = Math.floor(Math.random() * 3 + 1);
  let message = (x < 2) ? 'rock' :
    (x < 3) ? 'paper' :
    'scissors';

 return message;
    
}

function userPlay(){
  let x = window.prompt("Rock, paper, scissors! Go!: ");
  let y = x.toLowerCase(); 
  return y;
}

function playRound(playerSelection,computerSelection){
  console.log(`You choosed: ${playerSelection}`)
  console.log(`The PC choosed: ${computerSelection}`)
  
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
  return message;
}
function main(){
const playerSelection = userPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
}