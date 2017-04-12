import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
import App from './App.vue'

// require('./fontello/css/fontello.css');

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    is_load_google_map: false
  },
  mutations: {
    usingGoogleMap (state) {
      state.is_load_google_map = true;
    }
  }
});


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
  store,
  render: h => h(App)
})
