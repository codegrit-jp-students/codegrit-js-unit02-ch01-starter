import _ from 'lodash';
let numbers = [];

function addRandomNum() {
  const mainEl = document.getElementById('main');
  const randomNum = _.random(0, 10);
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p)
  if (numbers.length <= 5) {
      numbers.shift();
  }
  numbers.push(randomNum);
}

function recordNumber() {
  for (let i = 0; i <= 5; i++) {
  _.sum(numbers)
  let p = document.createElement('p')
  p.innerHTML = "Total: " + _.sum.toString(); // toString()をinnerHTMLと一緒に使ってOK。今回は計算結果を出すので、innerHTMLだけでは不十分。toStringメソッドが含まれる
  document.body.appendChild(p)
  }
}
/* lodashインポートしているので、そのままlodashを使える。 */

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}

{
  const button2 = document.getElementById('button2')
  button2.addEventListener("click", recordNumber);
  console.log("ready");
}