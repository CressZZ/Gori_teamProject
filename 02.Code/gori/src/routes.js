import Main from './components/Main.vue'
import Lec from './components/Lec.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Join from './components/Join.vue'
import Login from './components/Login.vue'

export const routes = [
  {
    path: '',
    name: 'main',
    components: {
      'default': Main,
      'header': Header,
      'footer': Footer,
      'join': Join,
      'login': Login,

    }
  },
  {
    path: '/lec',
    name: 'lec',
    components: {
      'default': Lec,
      'header': Header,
      'footer': Footer,
      'join': Join,
      'login': Login,
      // Map: Map
    }
  },
  {
    path: '*', redirect: '/'
  },
]
