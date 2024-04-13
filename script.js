let count = 0; // カウントを初期化
let buttonCount = 0;
// let messageTimeout;

function decrementCount() {
  // カウントをマイナス1する
  count -= 1;
  if (count < 0) {
    count = 0; // カウントが負にならないように調整
  }
  // プログレスバーの幅と値を更新
  document.getElementById('progress').style.width = count + '%';
  document.getElementById('progress').textContent = Math.floor(count) + '%';

  // 5秒後に再度カウントをマイナス0.1する
  setTimeout(decrementCount, 5000);
}

function increment() {
  count++;
  if (count > 100) {
    count = 100; // カウントを100に制限
  }
  document.getElementById('progress').style.width = count + '%'; // プログレスバーの幅を更新
  document.getElementById('progress').textContent = Math.floor(count) + '%'; // プログレスバーの値を更新

  buttonCount++;
  if (buttonCount === 30 || buttonCount === 70 || buttonCount === 80|| buttonCount === 90|| buttonCount ===  100 ) {
    alert("一気に食べ過ぎたから少し休もう！")
    document.getElementById('foodButton').disabled = true; // ボタンを無効にする
    setTimeout(function() {
        document.getElementById('foodButton').disabled = false; // ボタンを有効にする
      }, 5000);
    }
    if (count === 100) {
      document.getElementById('message').textContent = "満腹になりました！"; // メッセージを表示
      messageTimeout = setTimeout(function() {
          document.getElementById('message').textContent = ""; // メッセージを空にする
          count = 0;
        }, 5000);
      } else {
        // カウントが100未満の場合、メッセージをクリアする
        document.getElementById('message').textContent = ""; // メッセージを空にする
        clearTimeout(messageTimeout);
      }
    }
  setTimeout(decrementCount, 5000);
  
//ここいじる！
// 4回繰り返されたら画像を変更する
if (buttonCount % 1 === 0) {
   document.getElementById("img1").src = "test2.png";
} else if ($countA == 50) {
document.getElementById("img1").src = "test3.png";
}

function changeImage() {
    const img = document.querySelector('.cat1 img');
   img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYVAcCSq1zLz8B_Ayq2N9vTDFJJGJiRheOVimqNuAoFSD40jAH-sZhxggDxWV9srl1xBmltLcxFkvEvc1A1kucV80glcN0DJCT5Aa2QdTqv4DaXEXXHkW2Bqtf9rReqhzjiZqCFN-tbnfz/s400/cat_hair_summercut.png';
  }

  // ボタンのクリックイベントを登録
  document.getElementById('foodButton').addEventListener('click', increment);
  
  // ページ読み込み時のイベントを登録
  window.onload = function() {
    // ブラウザ上に表示する文字列を保持する一時変数
    let outstr = "";
    // console.logの挙動
    console.log = (...args) => {
      for (let arg of args) {
        // console.logに入力された文字列を改行つきで保持
        outstr = outstr + arg + "<br>";
      }
      // HTMLのid="console"に対して文字列outstrを設定する
      document.getElementById("message").innerHTML = outstr;
    };
  };
  setTimeout(decrementCount, 5000);
