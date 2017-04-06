<template lang="html">
    <div>
      <!-- skip-nav -->
      <a href="#" class="skip-nav">본문 바로가기</a>
        <!-- header -->
        <header class="header row">
          <!-- 고리 로고 -->
          <div class="header__heading row">
            <h1 class="header__logo col-4-4 col-12-12">
              <div class="header__logo__wrapper">
                <a href="#">
                  <p class="header__logo--title">Gori</p>
                </a>
              </div>
            </h1>
            <!-- menu -->
            <!--  <ul class="header__navi__lnb_list off<<<<<">-->
            <nav class="header__navi">
              <button class="header__navi__btn-menu--open pd20 on" type="button" name="button"><i class="icon-menu"></i></button>
              <button class="header__navi__btn-menu--close pd20 off" type="button" name="button"><i class="icon-cancel"></i></button>
              <div class="header__navi__wrapper">
                <ul class="header__navi__lnb_list">
                  <li><a href="#" class="navi_menu navi_menu_tutor ">튜터등록</a></li>
                  <li><a href="#" class="navi_menu navi_menu_service ">서비스소개</a></li>
                  <li><a href="#" class="navi_menu navi_menu_join is_logout ">회원가입</a></li>
                  <li><a href="#" class="navi_menu navi_menu_mypage is_login off ">마이페이지</a></li>
                  <li><a href="#" class="navi_menu navi_menu_login is_logout">로그인</a></li>
                  <li><a href="#" class="navi_menu navi_menu_logout is_login off">로그아웃</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

   </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main-index"
</style>
