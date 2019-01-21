import _ from 'lodash';

function addRandomNum() {
  const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + _.random(0, 10).toString();
  document.body.appendChild(p)
}

function recordNumber() {
  const arr = new Array();
  for (let i = 0; i < 5; i++) {
  arr[0] = '1';
  arr[1] = '2';
  arr[2] = '3';
  arr[3] = '4';
  arr[4] = '5';
  arr[5] = '6';
  }
}

function sumNumbers() {
  _.sum([1, 2, 3, 4, 5])
  let p = document.createElement('p')
  p.innerHTML = "Total: " + _.sum.toString();
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}

{
  const button2 = document.getElementById('button2')
  button2.addEventListener("click", sumNumbers);
  console.log("ready");
}
