<template lang="html">
  <div id="join" v-cloak>
    <div v-if="joinvisibles" class="modal is-active">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <div class="box">
        <div class="sign-up__container">
            <h1 class="sign-up__heading">회원가입</h1>
            <form class="sign-up__field ng-pristine ng-valid ng-valid-email ng-valid-required">
              <label class="info skip-nav" for="email"></label>
              <input id="email" type="email" placeholder="이메일 주소" title="회원가입 이메일 주소 입력" ng-model="email" required="" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-email ng-valid-required">
              <label for="name" class="a11y"></label>
              <input id="name" type="text" title="회원가입 이름 입력" placeholder="이름" ng-model="nickname" required="" class="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required">
              <label for="password" class="a11y"></label>
              <input id="password" type="password" title="회원가입 비밀번호 입력" placeholder="비밀번호(6자 이상)" ng-model="pw" required="" class="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required">
              <label class="skip-nav" for=""></label>
              <input type="password" placeholder="비밀번호 확인" required="" title="비밀번호 확인" ng-model="pw" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required">
              <div class="checkbox-custom checkbox-default">
                <input id="policy" type="checkbox" required>
                <label for="policy" class="policy">서비스 이용 약관에 동의합니다.</label>
              </div>
              <button class="join__email-btn" ng-click="Join()">회원가입</button>
            </form>
            <div class="facebook__join ng-scope" data-ng-controller="FBLoginController">
              <button class="facebook__join-btn" ng-click="FBLogin()">facebook 회원가입</button>
            </div>
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
      // joinvisible: false
    }
  },
  methods: {
    closeModal: function() {
      console.log('clicked');
      this.$emit('joinnonVisible');
    }
  },
props: ['joinvisibles'],
}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/common_login_join"
</style>
