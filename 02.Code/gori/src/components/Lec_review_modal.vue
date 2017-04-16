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
                        <ul>

                          <li class="st_off" id="curriculum" v-for ="(value, key) in ratings">
                            <h3 class="review__rating__subtitle">{{value}}</h3>
                            <lec-review-modal-rating :title = "key" ></lec-review-modal-rating>
                          </li>

                        </ul>
                      </div>
                    </div>

                </div>
                <div class="review-content">
                  <textarea name="content" rows="5" cols="30" placeholder="솔직한 리뷰를 작성해주세요 " id="content" v-model="add.comment"></textarea>
                <button type="button" class="review__btn__add" @click="submitReview">리뷰 작성</button>
                </div>
              </div>
            </fieldset>
            </form>
             <!-- <button class="modal-close" @click="closeModal">X</button> -->
          </div>
          </div>


</template>

<script>
import LecReviewModalRating from './Rating.vue'

export default {
  data: function() {
    return {
      ratings:
        {
        curriculum: "커리큘럼",
        readiness: "준비성",
        timeliness: "시간준수",
        delivery: "전달력",
        friendliness: "친절도"
      },

      add: {
        talent_pk: +this.$route.params.lecid,
        // v-model="add.curriculum"
        curriculum: "1",
        // v-model="add.readiness"
        readiness	: 1,
        // v-model="add.timeliness"
        timeliness: 1,
        // v-model="add.delivery"
        delivery: 1,
        // v-model="add.friendliness"
        friendliness: 1,
        comment: ""
      },
      // addReview: null
    }
  },
  props:['isvisibles'],
        // ['']
  methods: {
    closeModal: function() {
      console.log('clicked');
      this.$emit('isvisibles')
    },
    submitReview(){
      console.log('modal!!clicked');
      console.log("add.talent_pk:",this.add);


      if(!this.add.comment || this.add.comment === " "){
        return alert("내용을 입력하셔야죠!!!!!!")
        // this.
      }
      // this.add.comment = this.add.comment;

      this.$http.post(`talent/add/review/`,this.add,{
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })

    // .then(function(response){
    //   console.log("response:",response)
    //   if(response.status === 201){
    //     this.is_wishList = true
    //     alert("위시리시트에 추가 되었습니다. 마이페이지에서 찜한 목록을 확인할 수 있습니다!")
    //   } else if(response.status === 200){
    //     this.is_wishList = false
    //     alert("위시리시트에 삭제되었습니다. ")
    //     console.log(data)
    //     return response.json()
    //   }
    // })


    .then(function(data){
      console.log("data:",data)
    this.add.comment = null;
    })
    .catch( error => {
      console.log("error:",error)
    });
  }
},
  components: {
    LecReviewModalRating
    },
  created() {
    // console.log("kaaaaaaaaaaaaaaaaaa");
  },
}

</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/common_login_join"
</style>
