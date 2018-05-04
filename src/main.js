import Vue from 'vue'
import App from './App.vue'
import Router from './routes';
import Auth from './packages/auth/auth.js';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Auth);

Router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticate()) {
        next({
          path: '/about'
        })
      } else next()
    } else if (to.matched.some(records => records.meta.forAuth)) {
      if ( ! Vue.auth.isAuthenticate()) {
        next({
          path: '/login'
        })
      } else next()

    }
  }
);

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
});
