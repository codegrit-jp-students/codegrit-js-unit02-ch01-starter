import _ from 'lodash';
let numbers = [];
numbers = [num1, num2, num3, num4, num5];
// ランダムなのでconstで固定しない。new Arrayで配列を作るのはあまりオススメしない。数値が変わることがある。作るとしたら、定数の中に配列を作ること。
// こちらで決められないので、引数で仮定。変数でsumを宣言する。同じことを何度も書かないように。sumメソッドの中身が引数となる。ここではlodashを使わないが、別の場所で使うための下ごしらえをする。

let p = document.createElement('p')

function addRandomNum() {
  const mainEl = document.getElementById('main');
  const randomNum = _.random(0, 10);
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p)
  if (numbers.length <= 5) {
      numbers.shift();
  }
  numbers.push(randomNum);
}

function recordNumber() {
  for (let i = 0; i <= 5; i++) {
  _.sum(numbers) // マニュアルに数値を入れられないので、引数を入れる。[]は数値の時のみ必要、引数の場合は不要。
  p.innerHTML = "Total: " + _.sum.toString(); // toString()をinnerHTMLと一緒に使ってOK。今回は計算結果を出すので、innerHTMLだけでは不十分。toStringメソッドが含まれる
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