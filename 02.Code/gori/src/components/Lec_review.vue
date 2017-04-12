<template lang="html">
  <!-- review -->
  <section class="review" id="review">
    <div class="row">
      <div class="review-section-1 col-4-4 col-7-12">
        <h2 class="review__heading"  >리뷰</h2>
        <div>
          <button type="button" class="review__btn" @click="isvisible">리뷰작성 + </button>
        </div>
      </div>
    </div>
    <div class="review-section-2 row">
      <ul class="col-4-4 col-7-12 row review__stars">
        <li>
          <strong>종합점수</strong>
          <div class="reveiw__stars__total">
            <!-- <div class="star-1st"><i class="icon-star"></i></div> -->
            <!-- <div class="star-2nd"><i class="icon-star"></i></div> -->
            <div class="star-3rd"><i class="icon-star"></i></div>
            <div class="star-4th"><i class="icon-star"></i></div>
            <div class="star-5th"><i class="icon-star"></i></div>
          </div>
        </li>
        <li>
          <strong>전달력</strong>
          <div class="reveiw__stars__transfer">
            <div class="star-1st"><i class="icon-star"></i></div>
            <div class="star-2nd"><i class="icon-star"></i></div>
            <div class="star-3rd"><i class="icon-star"></i></div>
            <div class="star-4th"><i class="icon-star"></i></div>
            <div class="star-5th"><i class="icon-star"></i></div>
          </div>
        </li>
        <li>
          <strong>준비성</strong>
          <div class="reveiw__stars__ready">
            <div class="star-1st"><i class="icon-star"></i></div>
            <div class="star-2nd"><i class="icon-star"></i></div>
            <div class="star-3rd"><i class="icon-star"></i></div>
            <div class="star-4th"><i class="icon-star"></i></div>
            <div class="star-5th"><i class="icon-star"></i></div>
          </div>
        </li>
        <li>
          <strong>친절도</strong>
          <div class="reveiw__stars__kind">
            <div class="star-1st"><i class="icon-star"></i></div>
            <div class="star-2nd"><i class="icon-star"></i></div>
            <div class="star-3rd"><i class="icon-star"></i></div>
            <div class="star-4th"><i class="icon-star"></i></div>
            <div class="star-5th"><i class="icon-star"></i></div>
          </div>
        </li>
        <li>
          <strong>시간준수</strong>
          <div class="reveiw__stars__sincerity">
            <div class="star-1st"><i class="icon-star"></i></div>
            <div class="star-2nd"><i class="icon-star"></i></div>
            <div class="star-3rd"><i class="icon-star"></i></div>
            <div class="star-4th"><i class="icon-star"></i></div>
            <div class="star-5th"><i class="icon-star"></i></div>
          </div>
        </li>
        <li>
          <strong>커리큘럼</strong>
          <div class="reveiw__stars__curriculum">
            <div class="star-1st"><i class="icon-star"></i></div>
            <div class="star-2nd"><i class="icon-star"></i></div>
            <div class="star-3rd"><i class="icon-star"></i></div>
            <div class="star-4th"><i class="icon-star"></i></div>
            <div class="star-5th"><i class="icon-star"></i></div>
          </div>
        </li>
      </ul>

    </div>
    <div class="review__write">
      <!-- css작업 고려해서 div로 나누어 보았습니다. -->
      <div class="row">

        <div class="review__write__writer col-4-4 col-7-12">
          <div class="review__write__writer__info-1">
            <img class="review__write__writer__picture" src="../media/img/user.jpg">
            <strong class="review__write__writer__id">홍길동</strong>
          </div>
          <div class="review__write__writer__info-2">
            <time class="review__write__writer__info__date" data-time="1490167752" data-type="date">
              2017-03-22
            </time>
            <p class="review__write__writer__descrip">Lorem ipsum dolor sit amet.</p>

          </div>
        </div>
      </div>

      <!-- css작업 고려해서 div로 나누어 보았습니다. -->
      <div class="row">

        <div class="review__write__writer col-4-4 col-7-12">
          <div class="review__write__writer__info-1">
            <img class="review__write__writer__picture" src="../media/img/user.jpg">
            <strong class="review__write__writer__id">홍길동</strong>
          </div>
          <div class="review__write__writer__info-2">
            <time class="review__write__writer__info__date" data-time="1490167752" data-type="date">
              2017-03-22
            </time>
            <p class="review__write__writer__descrip">Lorem ipsum dolor sit amet.</p>

          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="review__page col-4-4 col-7-12" style="">
        <a href="#" class="review__page__btn on_page">1</a>
        <a href="#" class="review__page__btn">2</a>
        <a href="#" class="review__page__btn">3</a>
      </div>

    </div>

    <lec-review-modal :isvisibles="isvisibles" @isvisibles = "isvisible">
    </lec-review-modal>

  </section>


</template>

<script>
import LecReviewModal from './lec_review_modal.vue'

export default {
  data(){
    return{
      isvisibles: false

    }
  },
  methods: {
    isvisible() {
      this.isvisibles = !this.isvisibles
      console.log('click');
    }
  },
  components: {
    LecReviewModal,
  },

}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_review"
  </style>
