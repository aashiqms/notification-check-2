import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Get your own config :)
const firebaseConfig = {
  apiKey: "AIzaSyDV1PlnH6gVr2T8iBuhDYj_m9NxR216Brw",
  authDomain: "notify-a346b.firebaseapp.com",
  projectId: "notify-a346b",
  storageBucket: "notify-a346b.appspot.com",
  messagingSenderId: "99418565970",
  appId: "1:99418565970:web:c8ee7d417ee80d963ede8b",
  measurementId: "G-L44KP6PEBC"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Receive the service worker registration.
navigator.serviceWorker.getRegistration(
    "./ngsw-worker.js"
).then(
    (registration) => {
        getToken(messaging,
            {
                vapidKey: "BFncumAuqdn0UuKOX2qDDDYrgmB123jDB9Fxbr7h4y7TIWk65lFMqzKaTyldo7LWcHkIfHez4mnRe2imG9BkrcI",// Get your own vapid key
                serviceWorkerRegistration: registration
            }
        ).then(
        (currentToken) => {
            if (currentToken) {
                // Send the token to your server and update the UI if necessary
                // ...
                console.log(currentToken);
                localStorage.setItem('currentToken', currentToken)
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
                // ...
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
        });

    }
);
