importScripts(
  'https://www.gstatic.com/firebasejs/9.8.0/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.8.0/firebase-messaging-compat.js',
);

const app = firebase.initializeApp({
  apiKey: "AIzaSyDV1PlnH6gVr2T8iBuhDYj_m9NxR216Brw",
  authDomain: "notify-a346b.firebaseapp.com",
  projectId: "notify-a346b",
  storageBucket: "notify-a346b.appspot.com",
  messagingSenderId: "99418565970",
  appId: "1:99418565970:web:c8ee7d417ee80d963ede8b",
  measurementId: "G-L44KP6PEBC"
});

firebase.messaging(app);
