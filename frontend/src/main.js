import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bulma/css/bulma.css'
import firebase from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDNRNFbNT8sjIDc8Akc-vtwlfT2VUkpWYs",
  authDomain: "school-service-23bb6.firebaseapp.com",
  databaseURL: 'https://school-service-23bb6.firebaseio.com',
  projectId: "school-service-23bb6",
  storageBucket: "school-service-23bb6.appspot.com",
  messagingSenderId: "289301623856",
  appId: "1:289301623856:web:8175a6a5350bd409a2e9f5"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
