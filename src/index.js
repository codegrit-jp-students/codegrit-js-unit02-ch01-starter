        import _ from 'lodash';

        function addRandomNum() {
            const mainEl = document.getElementById('main');
            let p = document.createElement('p');
            let randomNumber = "Random Number: " + _.random(0, 10).toString();
            p.innerHTML = randomNumber;
            document.body.appendChild(p);
        }

        {
            const button1 = document.getElementById('button1');
            button1.addEventListener("click", addRandomNum);
            console.log("ready");
        }

        function recordNumber() {
            randomNumber = [num1, num2, num3, num4, num5]
             for (i = 0; i >= randomNumber.length; i++) {
                 _.sum(randomNumber[i]);
            }
        }

        function sumFiveNum() {
            let p = document.createElement('p');
            p.innerHTML = "Sum of Recent Five Number: " + recordNumber();
            document.body.appendChild(p);
        }

        {
            const button2 = document.getElementById('button2');
            button2.addEventListener("click", sumFiveNum);
        }

        // フォークしたリポジトリ上でNPMスクリプトを呼び出してwebpack-dev-serverを立ち上げましょう。
        // recordNumberというファンクションを作成して、addRandomNumの結果が最大5つまで保存されるようにしましょう。
        // ボタンをもう一つ作成して、クリックすると保存されている数字の合計を表示するようにしましょう。 数字の合計には、lodashのファンクションの一つを利用して下さい。
