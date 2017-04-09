import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://gori-f0de6.firebaseio.com/';
// Vue.http.headers.common['Authorization'] = 'Token '

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
