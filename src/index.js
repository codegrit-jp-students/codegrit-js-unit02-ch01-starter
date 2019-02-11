import _ from 'lodash';

function addRandomNum() {
  const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + _.random(0, 10).toString();
  document.body.appendChild(p)

  let numbers = [];
  numbers = [num1, num2, num3, num4, num5];
  function randomNum() {
    while(numbers.length < 5) {
      numbers.push(_.random(0, 10));
    }
  }
}

/* function recordNumber() {
  let arr = [];
  arr = [num1, num2, num3, num4, num5]; // ランダムなのでconstで固定しない。new Arrayで配列を作るのはあまりオススメしない。数値が変わることがある。作るとしたら、定数の中に配列を作ること。
  // こちらで決められないので、引数で仮定。変数でsumを宣言する。同じことを何度も書かないように。sumメソッドの中身が引数となる。ここではlodashを使わないが、別の場所で使うための下ごしらえをする。
  for (let i = 0; i < 5; i++) {
    _.sum(arr) // マニュアルに数値を入れられないので、引数を入れる。[]は数値の時のみ必要、引数の場合は不要。
    let p = document.createElement('p')
    p.innerHTML = "Total: " + _.sum.toString(); // toString()をinnerHTMLと一緒に使ってOK。今回は計算結果を出すので、innerHTMLだけでは不十分。toStringメソッドが含まれる
  }
} */
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