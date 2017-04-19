
<template lang="html">
    <div>
      <!-- skip-nav -->
      <a href="#" class="skip-nav">본문 바로가기</a>
        <!-- header -->
        <header class="header">
          <div class="header__wrapper">
          <!-- 고리 로고 -->
            <div class="header__heading">

              <h1 class="header__logo">
                <div class="header__logo__wrapper">
                  <router-link to="/">
                    <p class="header__logo--title">Gori</p>
                  </router-link>
                </div>
              </h1>
              <button class="header__navi__btn-menu--open   "  :class="{off: !isoffs}" type="button" name="button" @click="isoff"><i class="icon-menu"></i></button>
              <button class="header__navi__btn-menu--close   "  :class="{off: isoffs}"  @click="isoff" type="button" name="button" ><i class="icon-cancel"></i></button>

            </div>
            <!-- menu -->
            <!--  <ul class="header__navi__lnb_list off<<<<<">-->

            <nav class="header__navi":class="{off: isoffs}">
                <ul class="header__navi__lnb_list"  >
                  <router-link tag="li" :to = "{ name: 'list'}" class="navi_menu_search"> <a href="#" >검색</a></router-link>


                  <router-link tag="li" :to = "{ name: 'tutor'}"  class="navi_menu navi_menu_join  is_login" :class= "{off: !islogin}" > <a href="#" >튜터등록</a></router-link>
                  <!-- <li class="navi_menu navi_menu_service ">
                    <a href="#" @click = "verifyTalent" >강의 승인</a>

                  </li> -->

                    <li class="navi_menu navi_menu_service ">
                      <a href="#" @click = "submitLogin" >서비스소개</a>
                    </li>
                </ul>

                <ul class="header__navi__lnb_list-sec-2">
                  <li class="navi_menu navi_menu_join  is_logout" :class= "{off: islogin}">
                    <a href="#"  @click = "joinvisible">회원가입</a>
                  </li>
                  <router-link tag="li" :to = "{ name: 'myinfo'}"  class="navi_menu navi_menu_join  is_login" :class= "{off: !islogin}" > <a href="#" >마이페이지</a></router-link>


                  <li  class="navi_menu navi_menu_login is_logout " :class= "{off: islogin}">
                    <a href="#"  @click = "loginvisible">로그인
                    </a>
                  </li>
                  <li class="navi_menu navi_menu_login is_login" :class= "{off: !islogin}">
                    <a href="#" @click = "logout" >로그아웃</a>
                  </li>

                </ul>

            </nav>

          </div>
        </header>

   </div>
</template>

<script>
import {bus} from '../bus'
export default {
  data(){
    return{
      isoffs: true,
      // islogin: this.$store.state.login.is_login,
      WindowWidth: window.innerWidth,
      currentPage: "pc",
      loginInfo: {
        username: "dkt@dkt.dkt",
        password: "qweasd123"
      }
    }
  },
  methods: {
    logout(){
      alert("로그아웃 완료")
      sessionStorage.setItem('is_login', false)
      this.islogouts()
      sessionStorage.clear()

      // this.$store.commit('logout')
      this.$router.push({ name: 'main' })
    },
    submitLogin() {
      this.login()
    },
    login(){
      this.$http.post('member/login/', this.loginInfo)
      .then(function(response){
        console.log("login-response:",response)
        return response.json()
      })
      .then(function(data){
        sessionStorage.setItem('Token', data.key)
        sessionStorage.setItem('is_login', JSON.stringify(true))
        // this.$store.commit('Token', data.key)
        // this.closeModal()
        console.log("login-data:",data)
        alert("로그인 완료!!")
        this.userInfo()
        this.wishlist()
        // this.loginUpdate()

      })
      .catch( error => {
        console.log("error:",error)
      });
    },
    userInfo(){
      this.$http.get('member/profile/user/', {
        headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
      })
      .then(function(response){
        console.log("user-response:",response)
        return response.json()
      })
      .then(function(data){
        console.log("user-data:",data)
        sessionStorage.setItem('loginInfo', JSON.stringify(data))
        this.loginUpdate()

        // this.$store.commit('loginInfo', data)
      })
      .catch(function(err){
        console.log("err:",err.bodyText)
      })
    },
    wishlist(){
      this.$http.get('member/wish-list/', {
        headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
      })
      .then(function(response){
        console.log("wishlist-response:",response)
        return response.json()
      })
      .then(function(data){
        console.log("wishlist-data:",data)
        sessionStorage.setItem('wishlist', JSON.stringify(data))
        this.loginUpdate()

        // this.$store.commit('wishlist', data)
        bus.$emit('wishrefreash')
      })
      .catch(function(err){
        console.log("err:",err.bodyText)
      })
    },


    loginvisible(){
      console.log("click:")
      bus.$emit('loginvisible')
    },
    joinvisible(){
      bus.$emit('joinvisible')
    },
    isoff(){
      if(this.windowWidth < 689){
        this.isoffs = !this.isoffs
      }
    },
    verifyTalent(){
      // this.$http.get('member/staff/verify/talent/23/', {
      //   headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      // })
      // .then(function(response){
      //   console.log("verifyTalent-response:",response)
      //   return response.json()
      // })
    },

    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      console.log("windowWidth:",this.windowWidth)
      if (this.windowWidth > 690){
        this.isoffs = false
        this.currentPage = "pc"
      } else if (this.windowWidth < 689){
        if(this.currentPage === "pc"){
          this.isoffs = true
          this.currentPage = "mobile"
        }
      }
      // if (this.windowWidth < 599){
        // this.isoffs = true
      // }
    },
    loginUpdate(){
      console.log("session_login:",JSON.parse(sessionStorage.getItem("is_login")))
      if (JSON.parse(sessionStorage.getItem("is_login")) === true){
        this.$store.commit("islogin")
        this.$store.commit("Token", sessionStorage.getItem("Token"))
        this.$store.commit("loginInfo", JSON.parse(sessionStorage.getItem("loginInfo")))
        this.$store.commit("wishlist", JSON.parse(sessionStorage.getItem("wishlist")))
      }
    },
    islogouts(){
      console.log("session_login:",JSON.parse(sessionStorage.getItem("is_login")))
      if (JSON.parse(sessionStorage.getItem("is_login")) === false){
        this.$store.commit("islogout")
      }
    }
  },
  computed: {
    islogin(){
      return this.$store.state.login.is_login
    }
  },
  created() {
    this.userInfo()
    this.wishlist()

    console.log("this.$store.state.login.is_login:",this.$store.state.login.is_login)
    this.windowWidth = window.innerWidth
    if (this.windowWidth > 690){
      this.currentPage = "pc"
      this.isoffs = false
    } else if (this.windowWidth < 689) {
      this.currentPage = "mobile"
      this.isoffs = true
    }
    window.addEventListener('resize', this.windowResize);
  },
  beforeDestroy: function () {
   window.removeEventListener('resize', this.windowResize)
 },
}
</script>

<style lang="sass">
  .header__navi__btn-menu--open
    // transition: all 1s

  // @import "../sass/total"
  // @import "../sass/main-index"
</style>
