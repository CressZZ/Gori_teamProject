import Main from './components/Main.vue'
import Lec from './components/Lec.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export const routes = [
  {
    path: '',
    name: 'main',
    components: {
      'default': Main,
      'header': Header,
      'footer': Footer
    }
  },
  {
    path: '/lec',
    name: 'lec',
    components: {
      'default': Lec,
      'header': Header,
      'footer': Footer
      // Map: Map
    }
  },
  {
    path: '*', redirect: '/'
  },
]
