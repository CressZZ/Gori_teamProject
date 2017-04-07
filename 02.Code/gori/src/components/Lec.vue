<template lang="html">

  <div>

  <!-- <join>

  </join>

  <login :visible="visibles" @nonVisible = "nonVisible">

  </login> -->

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


  </div>

</template>

<script>
// import Join from './Join.vue'
// import Login from './Login.vue'

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
      // intoTop: $(".intro").scrollTop(),

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

  },
  // props: ['visibles'],
  // methods:{
  //   nonVisible(){
  //     this.$emit('nonVisible')
  //   }
  // },
  // created() {
  // },

}
</script>

  <style lang="sass">


    // @import "../sass/total"
    // @import "../sass/lec-index"
  </style>
