import Vue from 'vue'
import App from './App.vue'
import Router from './routes';
import Auth from './packages/auth/auth.js';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Auth);

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
});
