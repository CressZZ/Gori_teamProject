import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
import App from './App.vue'

// require('./fontello/css/fontello.css');

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
},
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
