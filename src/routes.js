import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './component/authentication/Login.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	router: [
		{path: "/login", component: Login}
	]
})

export default 