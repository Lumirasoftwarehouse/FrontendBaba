<script setup>
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import Swal from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyBzaFBXZJ0UfT1upJCtXpB_T_4tuJL3TGE",
  authDomain: "test-notification-82601.firebaseapp.com",
  projectId: "test-notification-82601",
  storageBucket: "test-notification-82601.appspot.com",
  messagingSenderId: "941162676466",
  appId: "1:941162676466:web:80d9107d0c9257a5fb906b",
  measurementId: "G-YX9XP5SYHL"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  Swal.fire({
    title: payload.notification.title,
    text: payload.notification.body,
    icon: 'info',
    showConfirmButton: true
  });
});

getToken(messaging, { vapidKey: 'BB7lfn9NY2KNrEy5yvv4w2lsBCXy8sEPCoIbrhm85G2BoJy5xCiC9RINuipBgOq8GLLI2V2vdMk_mZipoH3U_eQ' }).then((currentToken) => {
  if (currentToken) {
    console.log("Token is:", currentToken);
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});
</script>

<template>
  <div id="page-top">
    <router-view/>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded bg-success" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
export default{
  data() {
  return {};
},

}
</script>

<style scoped>
.customToTop{
  margin-bottom: 60px;
}
</style>
