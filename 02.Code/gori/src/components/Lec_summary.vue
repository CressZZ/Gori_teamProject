<template lang="html">
  <!-- summery -->
  <section class="summery">
    <h2 class="hidden__heading">수업 안내</h2>
    <div class="row">
      <div class="summery__review col-2-4">
        <!-- 재활용을 위해 [class*=__stars]를 활용하는 것을 추천 -->
        <!-- 1.class__stars, 2.summery__stars -->
        <div class="summery__review__stars">
          <div class="star-1st"><i class="icon-star"></i></div>
          <div class="star-2nd"><i class="icon-star"></i></div>
          <div class="star-3rd"><i class="icon-star"></i></div>
          <div class="star-4th"><i class="icon-star"></i></div>
          <div class="star-5th"><i class="icon-star"></i></div>
        </div>
        <div class="row"><span class="into__review__num">후기</span></div>
      </div>
    </div>
    <h3 class="summery__class-title">{{classlist[+lecid - 1].title}}</h3>
    <div class="summery__gen-info">
      <span class="summery__gen-info__group">그룹</span>
      <span class="summery__gen-info__location-detail">장소협의</span>
      <span class="summery__gen-info__times">4회</span>
      <span class="summery__gen-info__time">1시간</span>
    </div>
    <div class="summery__price-info">
      <span class="summery__price-info__total"><i class="icon-won"></i>20,000</span>
      <span class="summery__price-info__each">총4회 240,000원</span>
    </div>
  </section>

</template>

<script>
export default {
  data(){
    return{
      review_num: "23",
      // id:
    }
  },
  props: ["classlist", "lecid"],
  methods: {

    },
  created(){
    console.log("this.classitem:", this.classlist)
  }
  }

</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_summary"
  </style>
