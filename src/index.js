const _ = require("lodash");

function addRandomNum() {
  let p = document.createElement('p');
  const randomNum = _.random(0, 10);
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p);
  recordNums(randomNum);
}

//ランダムな数字を保存するための配列
const numsArray = [];

/*
  ランダムの数字を５個まで配列に保存するメソッド
  ５個以上の場合、配列0番目の値を消してから配列に追加する
*/
function recordNums(randomNum) {
  if (numsArray.length < 5) {
    numsArray.push(randomNum);
    console.log(numsArray);
  } else {
    numsArray.shift();
    numsArray.push(randomNum);
    console.log(numsArray);
  }
}

//numsArray配列にある数字の合計を計算し、ブラウザに表示するメソッド
function sumRandomNums() {
  const sumNums = _.sum(numsArray);
  let p = document.createElement('p');
  p.innerHTML = "Sum Random Numbers: " + sumNums.toString();
  document.body.appendChild(p);
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", addRandomNum);
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", sumRandomNums);
  console.log("ready");
}