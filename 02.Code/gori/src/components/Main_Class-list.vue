<template lang="html">
    <div>
      <!-- skip-nav -->
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
            <nav class="header__navi">
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

          <!-- Categori -->
          <section class="categori row">
            <h2 class="hidden__heading">CATEGORI</h2>
            <!-- categori list 하나 삭제. 어학? -->
            <!-- 반응형 이미지를 구현하기 위해 img를 div에 한번 더 넣음. 괜히 복잡해보이므로 수정 가능하다면 수정 추천 -->
            <div class="categori__section-1">
              <a href="www.google.com"><img  src="../media/img/categori/health.jpg" class="categori__list-1-2"></a>
              <a href="www.google.com"><img  src="../media/img/categori/health.jpg" class="categori__list-1-2"></a>
            </div>
            <div class="categori__section-2">
              <a href="www.google.com"><img  src="../media/img/categori/health.jpg" class="categori__list-1-2"></a>
            </div>
            <div class="categori__section-3">
              <a href="www.google.com"><img  src="../media/img/categori/health.jpg" class="categori__list-1-2"></a>
              <a href="www.google.com"><img  src="../media/img/categori/health.jpg" class="categori__list-1-2"></a>
            </div>
          </section>


          <!-- class -->
          <section class="class-list row">
            <div class="class-list__heading_wrapper">
              <h2 class="class-list__heading ">POPULAR CLASS</h2>
              <p class="class-list__subtitle ">당신이 배우고 싶은것, 무엇이든 Gori</p>
            </div>
            <!-- ::before 선택자로 '+' 기호 추가 요망 -->
            <!-- Carousel -->
            <div class="class-list__carousel row" id="carousel-class">

              <ul class="class-list__carousel__list row">

                <!-- is_new class -->
                <li class="">
                  <!-- <a class="class">는 재활용이 가능 하도록 별도관리. -->
                  <a href="#" class="class">
                    <!-- 아래 <div class="is_new"> 는 가상선택자로 하는 것을 추천  -->
                    <div class="is_new">new</div>
                    <a href="#"><button type="button" class="class__wish is_wish"><i class="icon-heart"></i></button></a>
                    <img src="../media/img/temp/cat_4.jpg" alt="" class="class__tutor-picture">
                    <p class="class__tutor-name">cressZZ</p>
                    <div class="class__star-total">
                      <div class="star-1st"><i class="icon-star"></i></div>
                      <div class="star-2nd"><i class="icon-star"></i></div>
                      <div class="star-3rd"><i class="icon-star"></i></div>
                      <div class="star-4th"><i class="icon-star"></i></div>
                      <div class="star-5th"><i class="icon-star"></i></div>
                      <p class="start-total-num">(3)</p>
                    </div>
                    <h2 class="class__intro__title">강의 제목입 강의 제목입 강의 제목 입니다</h2>
                    <dl class="class__intro">
                      <dd class="class__intro__group">그룹</dd>
                      <dd class="class__intro__review-num">서울대입구</dd>
                      <dd class="class__intro__location">4회</dd>
                      <dd class="class__intro__times">2시간</dd>
                    </dl>
                  </a>
                </li>
                <!-- is_new class -->
                <li class="">
                  <!-- <a class="class">는 재활용이 가능 하도록 별도관리. -->
                  <a href="#" class="class">
                    <!-- 아래 <div class="is_new"> 는 가상선택자로 하는 것을 추천  -->
                    <div class="is_new">new</div>
                    <a href="#"><button type="button" class="class__wish is_wish"><i class="icon-heart"></i></button></a>
                    <img src="../media/img/temp/cat_4.jpg" alt="" class="class__tutor-picture">
                    <p class="class__tutor-name">cressZZ</p>
                    <div class="class__star-total">
                      <div class="star-1st"><i class="icon-star"></i></div>
                      <div class="star-2nd"><i class="icon-star"></i></div>
                      <div class="star-3rd"><i class="icon-star"></i></div>
                      <div class="star-4th"><i class="icon-star"></i></div>
                      <div class="star-5th"><i class="icon-star"></i></div>
                      <p class="start-total-num">(3)</p>
                    </div>
                    <h2 class="class__intro__title">강의 제목입 강의 제목입 강의 제목 입니다</h2>
                    <dl class="class__intro">
                      <dd class="class__intro__group">그룹</dd>
                      <dd class="class__intro__review-num">서울대입구</dd>
                      <dd class="class__intro__location">4회</dd>
                      <dd class="class__intro__times">2시간</dd>
                    </dl>
                  </a>
                </li>
                <!-- is_new class -->
                <li class="">
                  <!-- <a class="class">는 재활용이 가능 하도록 별도관리. -->
                  <a href="#" class="class">
                    <!-- 아래 <div class="is_new"> 는 가상선택자로 하는 것을 추천  -->
                    <div class="is_new">new</div>
                    <a href="#"><button type="button" class="class__wish is_wish"><i class="icon-heart"></i></button></a>
                    <img src="../media/img/temp/cat_4.jpg" alt="" class="class__tutor-picture">
                    <p class="class__tutor-name">cressZZ</p>
                    <div class="class__star-total">
                      <div class="star-1st"><i class="icon-star"></i></div>
                      <div class="star-2nd"><i class="icon-star"></i></div>
                      <div class="star-3rd"><i class="icon-star"></i></div>
                      <div class="star-4th"><i class="icon-star"></i></div>
                      <div class="star-5th"><i class="icon-star"></i></div>
                      <p class="start-total-num">(3)</p>
                    </div>
                    <h2 class="class__intro__title">강의 제목입 강의 제목입 강의 제목 입니다</h2>
                    <dl class="class__intro">
                      <dd class="class__intro__group">그룹</dd>
                      <dd class="class__intro__review-num">서울대입구</dd>
                      <dd class="class__intro__location">4회</dd>
                      <dd class="class__intro__times">2시간</dd>
                    </dl>
                  </a>
                </li>
                <!-- is_new class -->
                <li class="">
                  <!-- <a class="class">는 재활용이 가능 하도록 별도관리. -->
                  <a href="#" class="class">
                    <!-- 아래 <div class="is_new"> 는 가상선택자로 하는 것을 추천  -->
                    <div class="is_new">new</div>
                    <a href="#"><button type="button" class="class__wish is_wish"><i class="icon-heart"></i></button></a>
                    <img src="../media/img/temp/cat_4.jpg" alt="" class="class__tutor-picture">
                    <p class="class__tutor-name">cressZZ</p>
                    <div class="class__star-total">
                      <div class="star-1st"><i class="icon-star"></i></div>
                      <div class="star-2nd"><i class="icon-star"></i></div>
                      <div class="star-3rd"><i class="icon-star"></i></div>
                      <div class="star-4th"><i class="icon-star"></i></div>
                      <div class="star-5th"><i class="icon-star"></i></div>
                      <p class="start-total-num">(3)</p>
                    </div>
                    <h2 class="class__intro__title">강의 제목입 강의 제목입 강의 제목 입니다</h2>
                    <dl class="class__intro">
                      <dd class="class__intro__group">그룹</dd>
                      <dd class="class__intro__review-num">서울대입구</dd>
                      <dd class="class__intro__location">4회</dd>
                      <dd class="class__intro__times">2시간</dd>
                    </dl>
                  </a>
                </li>
              </ul>
            </div>
            <!-- Carousel left button-->
            <button class="class-list__carousel__left " type="button"><i class="icon-left-open-big"></i></button>
            <button class="class-list__carousel__more" type="button">더보기</button>
            <!-- Carousel right button-->
            <button class="class-list__carousel__right " type="button"><i class="icon-right-open-big"></i></button>
            <!-- carousel 끝! -->
          </section>


          <!-- <div class="header__heading row">
          <h1 class="header__logo col-4-4 col-12-12">
          <div class="header__logo__wrapper">
          <a href="#">
          <p class="header__logo--title">Gori</p>
        </a>
      </div>
    </h1> -->
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
export default {
}
</script>

<style lang="sass">
  @import "../sass/total"
  @import "../sass/main_class_list"
</style>
