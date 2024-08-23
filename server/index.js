const adming = require('firebase-admin');
const serviceAccount = require('./sample.json');

adming.initializeApp({
    credential: adming.credential.cert(serviceAccount)
});

const registrationTokenFromUI = '';


const message = {
    notification: {
        title: 'Angular Notification',
        body: 'Notification message check'
    },
    token: registrationTokenFromUI
};

adming.messaging().send(message)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((err) => {
        console.log('Error in sending the message', err);
    });
