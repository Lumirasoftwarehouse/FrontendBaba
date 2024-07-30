// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBzaFBXZJ0UfT1upJCtXpB_T_4tuJL3TGE",
    authDomain: "test-notification-82601.firebaseapp.com",
    projectId: "test-notification-82601",
    storageBucket: "test-notification-82601.appspot.com",
    messagingSenderId: "941162676466",
    appId: "1:941162676466:web:80d9107d0c9257a5fb906b",
    measurementId: "G-YX9XP5SYHL"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/emoji.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });