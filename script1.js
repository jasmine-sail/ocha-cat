let count = 0; // カウントを初期化
let buttonCount = 0;
let messageTimeout;

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
  if (buttonCount % 30 === 0 ) {
    alert("食べ過ぎたから少し休もう！")
    document.getElementById('foodButton').disabled = true; // ボタンを無効にする
    setTimeout(function() {
        document.getElementById('foodButton').disabled = false; // ボタンを有効にする
      }, 5000);
    }

  if (count % 100 === 0) { // countが100の倍数の場合のみ
    enlargeImage(); // 画像を大きくする関数を呼び出す

    document.getElementById('message').textContent = "満腹になりました！"; // メッセージを表示
    messageTimeout = setTimeout(function() {
      document.getElementById('message').textContent = ""; // メッセージを空にする
      count = 0;
      clearTimeout(messageTimeout);
    }, 5000);
  } else {
    // カウントが100未満の場合、メッセージをクリアする
    document.getElementById('message').textContent = ""; // メッセージを空にする
    clearTimeout(messageTimeout);
  }
}
function enlargeImage() {
  const img = document.getElementById('cat').getElementsByTagName('img')[0]; // <div>内の最初の<img>要素
  let currentWidth = img.offsetWidth; // 現在の幅を取得
  img.style.width = (currentWidth + 10) + 'px'; // 10px増やして幅を変更
  img.style.height = 'auto'; // 高さを自動調整してアスペクト比を保持
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
