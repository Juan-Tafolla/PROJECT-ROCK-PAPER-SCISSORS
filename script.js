
function computerPlay(){

  let x = Math.floor(Math.random() * 3 + 1);
  let message = (x < 2) ? 'Rock!' :
    (x < 3) ? 'Paper!' :
    'Scissors!';

 return message;
    
}