import _ from 'lodash';

let numbers = [];

function addRandomNum() {
  let p = document.createElement('p');
  const randomNum = _.random(0, 10);
  p.innerHTML = 'Random Number: ' + randomNum.toString();
  document.body.appendChild(p);

  if(numbers.length === 5) {
    numbers.shift();
  }
  numbers.push(randomNum);
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', addRandomNum);
  console.log('ready');

  const button2 = document.getElementById('button2');
  button2.addEventListener('click', recordNumber);
  console.log('ready2');
}

function recordNumber() {
  let p = document.createElement('p');
  let sum = _.sum(numbers);
  p.innerHTML = 'Sum of numbers: ' + sum.toString();
  document.body.appendChild(p);
}