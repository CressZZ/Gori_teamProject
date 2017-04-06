<template lang="html">
  <div>

    <!-- Banner -->
    <section class="banner">
      <h2 class="hidden__heading">서비스 광고 영상 및 배너</h2>
      <!-- Carousel -->
      <div class="banner__carousel" id="carousel">
        <!-- Carousel list -->
        <ul class="banner__carousel__list">
          <li>
            <video autoplay="" class="video_play" loop="" muted="" width="100%">
              <source src="../media/video/sample.mp4" type="video/webm">
              </video>
            </li>
            <li class="row col-4-4 off"><img class="banner__carousel__list__item" src="img/cat.jpg" alt="홍보배너"></li>
            <li class="row col-4-4 off"><img class="banner__carousel__list__item" src="img/cat.jpg" alt="소개"></li>
          </ul>
          <!-- Carousel nav ( ○○●○○ )  -->
          <ul class="banner__carousel__nav col-2-4 push-1-4">
            <li data-target="#carousel" data-slide-to="0"><a href="#" class="carousel">◦</a></li>
            <li data-target="#carousel" data-slide-to="1"><a href="#" class="carousel active">●</a></li>
            <li data-target="#carousel" data-slide-to="2"><a href="#" class="carousel">◦</a></li>
          </ul>
          <!-- Carousel buttons-->
          <div class="banner__carousel__buttons ">
            <button class="banner__carousel__left pd20" type="button"><i class="icon-left-open-big"></i></button>
            <button class="banner__carousel__right col-4-4 pd20" type="button"><i class="icon-right-open-big"></i></button>
            <!-- <button class="header__navi__btn-menu--open pd20 on" type="button" name="button"><i class="icon-menu"></i></button> -->
          </div>
        </div>
        <!-- Banner-input -->
        <!--모바일에서는 검색란 뺄것-->
        <div class="copy">
          <p class="copy__slogan">무엇이 당신을 빛나게 하나요?</p>
          <p class="copy__slogan__sub">배움으로 삶을 풍요롭게 해보세요!</p>
        </div>
        <div class="banner__search__wrapper">
          <form action="submit" class="banner__search">
            <input class="banner__search__input" type="search" autofocus placeholder="input your message"><button class="banner__search__btn" type="button">검색</button>
          </form>
        </div>
      </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main_carousel"

</style>
