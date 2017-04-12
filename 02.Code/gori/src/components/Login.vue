<template lang="html">
  <div id="login"  v-cloak>
    <div v-if="loginvisibles" class="modal is-active">
      <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content" >
        <div class="box">
        <div class="login__container">
            <h1 class="login__heading">로그인</h1>
            <form class="login__field ng-valid ng-valid-email ng-valid-required">
              <label class="skip-nav" for="">이메일주소</label>
              <input type="email" placeholder="이메일 주소" title="이메일 주소" ng-model="email" value="123@gmail.com" required="" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-email ng-valid-required">
              <label class="skip-nav" for="">비밀번호</label>
              <input type="password" placeholder="비밀번호" required="" title="비밀번호" ng-model="pw" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required">
              <button class="login__email-btn" ng-click="Login()">로그인</button>
              <div class="checkbox-custom checkbox-default">
                <input id="remember_me" name="user[remember_me]" type="checkbox">
                <label for="remember_me">로그인 상태 유지</label>

              </div>
            </form>
            <div class="login_else">
              <div class="panel-line">
                <hr class="divider">
                <div class="or">or</div>
              </div>
            <div class="facebook__login ng-scope" data-ng-controller="FBLoginController">
              <!-- <p>이미 페이스북으로 가입하셨다면</p> -->
              <button class="facebook__login-btn" ng-click="FBLogin()">facebook 로그인</button>
            </div>
            </div>
            <div class="panel-line">
              <hr class="divider">
            </div>
            <p class="member__ctrl">
              <a href="#">아이디 찾기 </a>
              <span>|</span>
              <a href="#"> 비밀번호 찾기 </a>
              <span>|</span>
              <a href="/#/signup"> 회원가입</a>
            </p>
             <button class="modal-close" @click="closeModal">X</button>
          </div>
          </div>
          </div>
        </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // is_visible: false
    }
  },
  methods: {
    closeModal: function() {
      this.$emit('loginnonVisible');
    }
  },
  props: ['loginvisibles'],

  // created(){
  //   console.log("DDDDDDDDDD")
  //   window.fbAsyncInit = function() {
  //     FB.init({
  //       appId      : '198995523925316',
  //       cookie     : true,  // enable cookies to allow the server to access
  //                       // the session
  //       xfbml      : true,  // parse social plugins on this page
  //       version    : 'v2.8' // use graph api version 2.8
  //     });
  //     FB.getLoginStatus(function(response) {
  //   statusChangeCallback(response);
  // });
  //
  // };
  //
  // (function(d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s); js.id = id;
  //   js.src = "//connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));
// },
}






</script>

<style lang="sass">


</style>
