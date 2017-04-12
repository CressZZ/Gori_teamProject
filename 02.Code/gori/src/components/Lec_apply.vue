<template lang="html">
  <!-- apply -->
  <section class="apply">
    <h2 class="hidden__heading">수업 상세정보</h2>

      <div class="apply__wrapper">
        <div class="apply__info">
          <!-- div빼고 ul만 살림 (이전에는 div가 ul을 감싸는 구조로, div가 필요 없다고 판단) -->
          <div class="">
            <ul class="apply__info__list ">
              <li class="apply__info__location">
                <i class="fontello icon-location"></i>
                <strong>신촌</strong>
                <span>지역상의후 변경가능</span>
              </li>
              <li class="apply__info__time">
                <i class="fontello icon-clock"></i>
                <strong>1시간/회</strong>
                <span>AM 9:30-PM 5:00</span>
              </li>
              <li class="apply__info__group">
                <i class="fontello icon-group-circled"></i>
                <strong>최대4인</strong>
                <span>최소인원 3명</span>
              </li>
              <li class="apply__info__week">
                <i class="fontello icon-calendar"></i>
                <strong>월/수/금</strong>
                <span>총4회 / 240,000원</span>
              </li>
              <li class="apply__info__additional-cost">
                <i class="fontello icon-won"></i>
                <strong>추가비용 <span>있음</span></strong>
                <span>개인카페음료</span>
              </li>
            </ul>
          </div>
        </div>


          <div class="apply__buttons">
            <button
            class="apply__buttons__btn-wish"
             @click.prevent = "toggleWishList()">찜하기
              <a href="#" class="apply__buttons__heart">
                <i v-bind:class="{ 'icon-heart-empty': !is_wishList, 'icon-heart': is_wishList }"></i>
              </a>
            </button>
            <button class="apply__buttons__btn-apply">수업 신청하기</button>
            <!-- 하트를 div에서 a로 change 함. 클릭이 되야 한다고 판단 -->
          </div>

      </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      is_wishList: false
    }
  },
  methods: {
    toggleWishList(){
      // console.log("addWishList");
      this.is_wishList = !this.is_wishList
    },

  },
}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_apply"
  </style>
