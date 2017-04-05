<template lang="html">

  <div>
    <a href="#" class="skip-nav">본문 바로가기</a>
    <div class="wrapper">
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
        <nav class="header__navi col-4-4">
          <button class="header__navi__btn-menu--open pd20 on" type="button" name="button"><i class="icon-menu"></i></button>
          <button class="header__navi__btn-menu--close pd20 off" type="button" name="button"><i class="icon-cancel"></i></button>
          <div class="header__navi__wrapper">
            <ul class="header__navi__lnb_list">
              <li><a href="#" class="navi_menu navi_menu_tutor ">튜터등록</a></li>
              <li><a href="#" class="navi_menu navi_menu_service ">서비스소개</a></li>
              <li><a href="#" class="navi_menu navi_menu_join col-2-4 col-12-12 is_logout ">회원가입</a></li>
              <li><a href="#" class="navi_menu navi_menu_mypage is_login off ">마이페이지</a></li>
              <li><a href="#" class="navi_menu navi_menu_login col-2-4 push-2-4 col-12-12 push-12-12 is_logout">로그인</a></li>
              <li><a href="#" class="navi_menu navi_menu_logout is_login off">로그아웃</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

  <lec-summary>

  </lec-summary>

  <lec-apply>
  </lec-apply>

  <lec-class-nav>
  </lec-class-nav>


  <lec-speaking>

  </lec-speaking>

  <lec-intro>

  </lec-intro>


  <lec-location>

  </lec-location>


  <lec-curriculum>

  </lec-curriculum>


  <lec-review>

  </lec-review>

  <lec-qna>

  </lec-qna>

  <!-- footer -->
  <footer class="footer row ">
    <h2 class="hidden__heading">회사 정보 및 서비스 안내</h2>
    <div class="footer__left">
      <div class="footer__section footer__section__company">
        <h3 class="footer__title">COMPANY</h3>
        <ul class="footer__left__company is_large">
          <li><a href="#">서비스 소개</a></li>
          <li><a href="#">블로그</a></li>
          <li><a href="#">언론보도</a></li>
        </ul>
        <i class="icon-plus"></i>
      </div>
      <div class="footer__section footer__section__policies">
        <h3 class="footer__title">POLICIES</h3>
        <ul class="footer__left__policies is_large">
          <li><a href="#">이용약관</a></li>
          <li><a href="#">결제서비스 약관</a></li>
          <li><a href="#">개인정보 취급방침</a></li>
        </ul>
        <i class="icon-plus"></i>
      </div>
      <div class="footer__section footer__section__Support">
        <h3 class="footer__title">SUPPORT</h3>
        <ul class="footer__left__support is_large">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">탈잉센터</a></li>
        </ul>
        <i class="icon-plus"></i>
      </div>

    <div class="footer__right">
      <div class="footer__right__logo">Gori</div>
      <address class="footer__right__address ">
        <span>상호: (주)Gori | 전화: 02-234-5678</span><br>
        <span>운영시간: 10:00~20:00 (평일)</span><br>
        <span>주소: 서울시 마포구 상수동 123-12 한주빌딩 5층</span>
      </address>
    </div>
    </div>
  </footer>
  </div>
</div>
</template>

<script>
import LecSummary from './Lec_summary.vue'
import LecSpeaking from './Lec_speaking.vue'
import LecApply from './Lec_apply.vue'
import LecCurriculum from './Lec_curriculum.vue'
import LecIntro from './Lec_intro.vue'
import LecLocation from './Lec_location.vue'
import LecQna from './Lec_qna.vue'
import LecReview from './Lec_review.vue'
import LecClassNav from './Lec_class-nav.vue'


export default {
  data(){
    return {

    }
  },
  components: {
    LecSummary,
    LecSpeaking,
    LecApply,
    LecCurriculum,
    LecIntro,
    LecLocation,
    LecQna,
    LecReview,
    LecClassNav,

  }

}
</script>

  <style lang="sass">
    // @import "../sass/total"
    // @import "../sass/lec-index"
  </style>
