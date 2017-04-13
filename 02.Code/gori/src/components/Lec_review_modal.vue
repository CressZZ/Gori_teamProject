<template>
  <!-- review -->
  <div v-if="isvisibles" class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
          <form id="pointWriteArea">
            <fieldset>
              <legend><h1 class="blind">리뷰</h1></legend>
                <h2 class="review__rating__title"><strong>홍길동</strong> 튜터의 수업은 어떠셨나요?</h2>
                <div class="t_layer_view">
                  <div class="drag_star">
                    <div class="review__lists">
                      <div class="review__list ">
                      <h3 class="review__rating__subtitle">종합점수</h3>
                        <ul>
                          <li class="st_off" id="total">
                            <lec-review-modal-rating></lec-review-modal-rating>
                          </li>
                        </ul>
                        <span class="blind">종합점수</span><span class="star_count"><em id="totalValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                      </div>
                      <div class="review__list ">
                        <h3 class="review__rating__subtitle">커리큘럼</h3>
                        <ul>
                          <li class="st_off" id="curriculum">
                            <lec-review-modal-rating></lec-review-modal-rating>
                          </li>
                        </ul>
                        <span class="blind">커리큘럼</span><span class="star_count"><em id="curriculumValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                      </div>
                      <div class="review__list ">
                        <h3 class="review__rating__subtitle">전달력</h3>
                        <ul>
                          <li class="st_off" id="skills">
                            <lec-review-modal-rating></lec-review-modal-rating>
                          </li>
                        </ul>
                      <span class="blind">전달력</span><span class="star_count"><em id="skillsValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                      </div>
                        <div class="review__list ">
                          <h3 class="review__rating__subtitle">준비성</h3>
                          <ul>
                            <li class="st_off" id="preparation">
                              <lec-review-modal-rating></lec-review-modal-rating>
                            </li>
                          </ul>
                        <span class="blind">준비성</span><span class="star_count"><em id="preparationValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                        </div>
                        <div class="review__list ">
                          <h3 class="review__rating__subtitle">친절도</h3>
                          <ul>
                            <li class="st_off" id="dedication">
                              <lec-review-modal-rating></lec-review-modal-rating>
                            </li>
                          </ul>
                        <span class="blind">친절도</span><span class="star_count"><em id="dedicationValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                        </div>
                        <div class="review__list ">
                          <h3 class="review__rating__subtitle">시간준수</h3>
                          <ul>
                            <li class="st_off" id="punctuality">
                              <lec-review-modal-rating></lec-review-modal-rating>
                            </li>
                          </ul>
                        <span class="blind">시간준수</span><span class="star_count"><em id="punctualityValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                        </div>
                      </div>
                </div>
                <div class="review-content">
                  <textarea name="content" rows="5" cols="30" placeholder="솔직한 리뷰를 작성해주세요 " id="content"></textarea>
                <button type="submit" class="review__btn__add">리뷰 작성</button>
                </div>
              </div>
            </fieldset>
            </form>
             <button class="modal-close" @click="closeModal">X</button>
          </div>
          </div>


</template>

<script>
import LecReviewModalRating from './Rating.vue'

export default {
  data: function() {
    return {
      // isvisibles: true
    }
  },
  methods: {
    closeModal: function() {
      console.log('clicked');
      this.$emit('isvisibles')
    }
  },
  props:  ['isvisibles'],
  components: {
    LecReviewModalRating
  },


  created() {

  },

}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/common_login_join"
</style>
