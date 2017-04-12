<template lang="html">
  <!-- summery -->
  <section class="summery">

      <h2 class="hidden__heading">수업 안내</h2>
      <div class="summery__wrapper">
      <div class="row">
        <div class="summery__review col-2-4">
          <!-- 1.class__stars, 2.summery__stars -->
          <div class="summery__review__stars">
            <div class="star-1st"><i class="icon-star"></i></div>
            <div class="star-2nd"><i class="icon-star"></i></div>
            <div class="star-3rd"><i class="icon-star"></i></div>
            <div class="star-4th"><i class="icon-star"></i></div>
            <div class="star-5th"><i class="icon-star"></i></div>
          </div>
          <div class="row"><span class="into__review__num">후기 {{detailAll.review_count}}건</span></div>
        </div>
      </div>
      <h3 class="summery__class-title">{{detailAll.title}}</h3>
      <div class="summery__gen-info">
        <span class="summery__gen-info__group">{{detailAll.type}}</span>
        <span class="summery__gen-info__location-detail">{{detailAll.locations[0] ? detailAll.locations[0].region : ""}}  {{detailAll.locations[1] ? "/" + detailAll.locations[1].region : ""}} </span>
        <span class="summery__gen-info__times">{{detailAll.number_of_class}} 회</span>
        <span class="summery__gen-info__time">{{detailAll.hours_per_class}} 시간/회</span>
      </div>
      <div class="summery__price-info">
        <span class="summery__price-info__total"><i class="icon-won"></i>{{
          String(detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
      }}원/회,</span>
        <span class="summery__price-info__each">총 {{String(detailAll.hours_per_class * detailAll.number_of_class * detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ " "}}원</span>
      </div>
      <div class="summery__img_wrapper">
        <img src="../media/img/categori/health.jpg" alt="" class="summery__img">
      </div>
    </div>


  </section>

</template>

<script>
export default {
  data(){
    return{
    }

  },
  props: ["detailAll"],

  watch:{
    '$route' (to, from){
      this.id = to.params.lecid
    }

    // '$route' (to, from){
    //   this.id = to.params.lecid
    // }
  },
  created(){
    // this.fetch()
  },
  mounted(){

  },
  beforeUpdate(){
  },
  mounted(){
  },
  methods: {
    // fetch(){
    //   this.$http.get(`https://mozzi.co.kr/api/talent/detail/${this.$route.params.lecid}/location/`)
    //   .then(function(response){
    //     return response.json()
    //   })
    //   .then(function(data){
    //     this.classlist = data
    //   })
    // }

  },
}
</script>

  <style lang="sass">
  </style>
