
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
                  <li > <a href="#" >튜터등록</a></li>


                  <!-- <li class="navi_menu navi_menu_tutor ">
                    <a href="#" >튜터등록</a>
                  </li> -->

                    <li class="navi_menu navi_menu_service ">
                      <a href="#" @click = "obtainToken" >서비스소개</a>
                    </li>
                </ul>

                <ul class="header__navi__lnb_list-sec-2">
                  <li class="navi_menu navi_menu_join  is_logout" :class= "{off: islogin}">
                    <a href="#"  @click = "joinvisible">회원가입</a>
                  </li>
                  <router-link tag="li" :to = "{ name: 'enroll'}"  class="navi_menu navi_menu_join  is_login" :class= "{off: !islogin}" > <a href="#" >마이페이지</a></router-link>

                  <!-- <li class="navi_menu navi_menu_join  is_login" :class= "{off: !islogin}" >
                    <a href="#" >마이페이지</a>
                  </li> -->
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
      WindowWidth: window.innerWidth,
      currentPage: "pc",
      userinfo: {
        username: "dkt@dkt.dkt",
        password: "qweasd123"
      }
    }
  },
  methods: {
    obtainToken(){
      console.log("click:")
      this.$http.post('member/token-auth/', this.userinfo)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        console.log("data:",data)
        alert("로그인 완료!!")
        this.$store.commit('Token', data.token)
      })
      .catch( error => {
        console.log("error:",error.bodyText)
      });
    },
    loginvisible(){
      console.log("click:")

      // this.$emit('loginvisible')
      bus.$emit('loginvisible')

    },
    joinvisible(){
      // this.$emit('joinvisible')
      bus.$emit('joinvisible')

    },
    isoff(){
      if(this.windowWidth < 689){
        this.isoffs = !this.isoffs
      }
    },
    logout(){
      alert("로그아웃 완료")
      this.$store.commit('logout')
    },
    // verifyTutor(){
    //   this.$http.post('member/token-auth/', this.userinfo)
    //   .then(function(response){
    //     return response.json()
    //   })
    //   .then(function(data){
    //     console.log("data:",data)
    //     alert("로그인 완료!!")
    //     this.$store.commit('Token', data.token)
    //   })
    //   .catch( error => {
    //     console.log("error:",error.bodyText)
    //   });
    // }


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
    }
  },
  computed: {
    islogin(){
      return this.$store.state.login.is_login
    }
  },
  created() {
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
