let count = 0; // カウントを初期化
let buttonCount = 0;
let messageTimeout;
let countReached = 0;

const images = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm-knfG3Qx9SP4CDnC51wozqS6WF91xYA-Gyc2Xo5pMJ6Ie4jKf5Ey7BTMOzLZEgbpf9GOVxG0z8Jvv3YoYnG9J2lmEAlFO3kNdpF_ai3hyphenhyphenqVKbicOX6YUtz6RtWnki1oaNjdyh6CnO2ZX/s400/cat_koubakozuwari_brown.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicSNssHWac14jXI_2e9T3I4bMQTLnvqy-7VSo9p2e54mSE2Ei3rziJU2rhfstt-j90bnY8fb75eA3wUSgHgrUaLnCym7CW1Bq-0cwVwb0JeUmAg5WQUvhFgFoTIEZpWyY1UT6PSzBV_wzd/s400/cat_hair_long.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYVAcCSq1zLz8B_Ayq2N9vTDFJJGJiRheOVimqNuAoFSD40jAH-sZhxggDxWV9srl1xBmltLcxFkvEvc1A1kucV80glcN0DJCT5Aa2QdTqv4DaXEXXHkW2Bqtf9rReqhzjiZqCFN-tbnfz/s400/cat_hair_summercut.png"
];

function decrementCount() {
  // カウントをマイナス1する
  count -= 0.1;
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
  // if (buttonCount === 30 || buttonCount === 70 ||
  //     buttonCount === 80|| buttonCount === 90|| 
  //     buttonCount ===  100 ) {
  //   alert("一気に食べ過ぎたから少し休もう！")
  //   document.getElementById('foodButton').disabled = true; // ボタンを無効にする
  //   setTimeout(function() {
  //       document.getElementById('foodButton').disabled = false; // ボタンを有効にする
  //     }, 5000);
  //   }
  if (count === 100) {
    countReached++;
    changeImage();
  
    document.getElementById('message').textContent = "満腹になりました！"; // メッセージを表示
    changeImage();
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
function changeImage() {
  const img = document.getElementById('cat');
  if (countReached % 2 === 0) {
    img.src = images[1]; // 2番目の画像に切り替える
  } 
  // else {
  //   img.src = images[2]; // 3番目の画像に切り替える
  // }
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
