const firebaseConfig = {
    apiKey: "AIzaSyAtMoTVJduyzaV0VOpT_UTwzftAKms0Tg4",
    authDomain: "ocha-cat.firebaseapp.com",
    projectId: "ocha-cat",
    storageBucket: "ocha-cat.appspot.com",
    messagingSenderId: "357673253800",
    appId: "1:357673253800:web:e40dc6848889ad9f95bb9d"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

   // ログイン画面の構成
   let uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function () {
            console.log("ログイン成功")
            return true;
        },
    },
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

let ui = new firebaseui.auth.AuthUI(firebase.auth());
// ログインUIを表示
ui.start('#firebaseui-auth-container', uiConfig);

// Firebase認証の初期化
const auth = firebase.auth();
// // Firebase UIの初期化
// const ui = new firebaseui.auth.AuthUI(auth);
