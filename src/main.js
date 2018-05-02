import Vue from 'vue'
import App from './App.vue'
import Router from './routes';

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
