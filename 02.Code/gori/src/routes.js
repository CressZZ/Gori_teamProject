import Main from './components/Main.vue'
import Lec from './components/Lec.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Join from './components/Join.vue'
import Login from './components/Login.vue'
// import LecMap from './components/Lec_map.vue'

export const routes = [
  {
    path: '',
    name: 'main',
    components: {
      'default': Main,
      'header': Header,
      'footer': Footer,
      // join과 login 일단 꺼놈
      'join': Join,
      'login': Login,
    },
  },
  {
    path: '/lec',
    name: 'lec',
    components: {
      'default': Lec,
      'header': Header,
      'footer': Footer,
      // join과 login 일단 꺼놈
      'join': Join,
      'login': Login,
      // 'map': LecMap
    },
    children: [
      // {path: '', component: UserEdit, name: 'LecMap' },
    ]
  },
  {
    path: '*', redirect: '/'
  },
]
