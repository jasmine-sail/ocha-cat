// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK1tkQo1NZsvBcHqpX2BnggcoG4xE7Uh4",
  authDomain: "ocha-cat-dc7f8.firebaseapp.com",
  projectId: "ocha-cat-dc7f8",
  storageBucket: "ocha-cat-dc7f8.appspot.com",
  messagingSenderId: "592316673962",
  appId: "1:592316673962:web:2ced5343b43c46709945d3",
  measurementId: "G-JGP53F7DYL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

const analytics = getAnalytics(app);

//新規登録処理
register.addEventListener('click', function(e) {
    var mailAddress = document.getElementById('mailAddress').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
    .catch(function(error) {
      alert('登録できません（' + error.message + '）');
    });
  });

  //ログイン処理
login.addEventListener('click', function(e) {
    var mailAddress = document.getElementById('mailAddress').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(mailAddress, password)
    .catch(function(error) {
      alert('ログインできません（' + error.message + '）');
    });
  });

  //認証状態の確認
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      //ログイン状態
      alert("ログインに成功しました");
    }else{
      //ログアウト状態
    }
  });